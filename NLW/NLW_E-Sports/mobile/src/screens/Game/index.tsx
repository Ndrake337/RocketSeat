import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Background } from '../../../src/components/Background'
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { FlatList, Image, TouchableOpacity, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { THEME } from '../../theme';
import logoImg from 'mobile/src/assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { DuoCardProps, DuoCard } from '../../components/DuoCard';
import { useEffect, useState } from 'react';
import { DuoMatch } from '../../components/DuoMatch'

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([])
  const [discordDuoSelect, setDiscordDuoSelect] = useState("")

  async function getDiscordUser(adsId:string) {
      fetch(`http://192.168.0.155:3333/ads/${adsId}/discord`).then(response => response.json()).then(data => setDiscordDuoSelect(data.discord))
  }
  const route = useRoute()
  const game = route.params as GameParams
  const navigation = useNavigation()
  function handleGoBack(){
    navigation.goBack()
  }

  
  useEffect(() =>{
    fetch(`http://192.168.0.155:3333/games/${game.id}/ads`).then(response => response.json()).then(data => setDuos(data))
  }, [])

  return (
    <Background>
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Entypo
            name='chevron-thin-left'
            color={THEME.COLORS.CAPTION_300}
            size={20}
          />
        </TouchableOpacity>
        
        <Image
          source={logoImg}
          style={styles.logo}
        />

        <View style={styles.right}/>
      </View>

      <Image
        source={{uri: game.bannerUrl}}
        style={styles.cover}
        resizeMode="cover"
      />
      <Heading 
        title={game.title}
        subtitle='Conecte-se comece a jogar'
      />

      <FlatList
        data={duos}
        keyExtractor = {item => item.id}
        renderItem={({item}) => (<DuoCard data={item} onConnect={() => getDiscordUser(item.id)}/>)}
        horizontal
        contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyList]}
        showsHorizontalScrollIndicator={false}
        style={styles.containerList}
        ListEmptyComponent={() => (<Text style={styles.emptyListText}>Não Há Anúncios publicados ainda .</Text>)}
      />

      <DuoMatch
        visible={discordDuoSelect.length >0}
        discord={discordDuoSelect}
        onClose={() => setDiscordDuoSelect('')}
      />
    </SafeAreaView>
    </Background>
  );
}