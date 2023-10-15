package br.com.matheusFelipe.todolist.filter;

import java.io.IOException;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import at.favre.lib.crypto.bcrypt.BCrypt;
import br.com.matheusFelipe.todolist.user.IUserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class FilterTaskAuth extends OncePerRequestFilter{

  @Autowired
  private IUserRepository userRepository;

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {

        var servletPath = request.getServletPath();

        if(servletPath.startsWith("/tasks/")){
          //Pegar a autenticação
          var authoirization = request.getHeader("Authorization");  
          var authEncoded = authoirization.substring("Basic".length()).trim();

          byte[] authDecoded = Base64.getDecoder().decode(authEncoded);
          
          var authString = new String(authDecoded);

          String[] credentials = authString.split(":");
          String username = credentials[0];
          String password = credentials[1];
          
          //valida usuario
          var user = this.userRepository.findByUsername(username);
          if(user == null){
            response.sendError(401);
          }
          else{
            //valida senha
            var passwordVerify = BCrypt.verifyer().verify(password.toCharArray(), user.getPassword());

            if(passwordVerify.verified){
              //pega o Id do usuario pela requisição
              request.setAttribute("idUser", user.getId());
              //segue viagem
              filterChain.doFilter(request, response);
            }
            else{
              response.sendError(401);
            }
          }
        }
        else{
          filterChain.doFilter(request, response);
        }

    
    
  }

  
}
