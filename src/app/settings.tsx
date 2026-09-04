/** INTEGRANTES
 * Cauê Gomes Prieto
 * Murillo Batista Maquiné
 * Yago Matheus Santos Lima
 */

import { colors } from '@/styles/colors'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft, ChevronRight, User } from 'lucide-react-native'
import { useRouter } from 'expo-router'

const opcoesDeConfiguracaoCMY = [
  { id: 'conta', title: 'Conta' },
  { id: 'dados', title: 'Economia de dados' },
  { id: 'idiomas', title: 'Idiomas' },
  { id: 'reproducao', title: 'Reprodução' },
  { id: 'explicito', title: 'Conteúdo explícito' },
  { id: 'dispositivos', title: 'Dispositivos' },
  { id: 'carro', title: 'Carro' },
  { id: 'social', title: 'Redes sociais' },
  { id: 'voz', title: 'Assistentes de voz e aplicativos' },
]

export default function ConfiguracoesCMY() {
  const router = useRouter()

  function voltarCMY() {
    router.back()
  }

  function irParaPerfilCMY() {
    router.push('/profile')
  }

  function aoPressionarOpcaoCMY(idOpcaoCMY: string) {
    console.log('Clicou em:', idOpcaoCMY)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cabecalhoCMY}>
          <TouchableOpacity onPress={voltarCMY} style={styles.botaoVoltarCMY}>
            <ArrowLeft color={colors.white} size={24} />
          </TouchableOpacity>
          <Text style={styles.tituloCabecalhoCMY}>Configurações</Text>
          <View style={styles.ladoDireitoCabecalhoCMY} />
        </View>

        <TouchableOpacity
          style={styles.secaoPerfilCMY}
          onPress={irParaPerfilCMY}
        >
          <View style={styles.containerImagemPerfilCMY}>
            <View style={styles.imagemPerfilCMY}>
              <User color={colors.white} size={30} />
            </View>
          </View>
          <View style={styles.infoPerfilCMY}>
            <Text style={styles.nomePerfilCMY}>Yago Lima</Text>
            <Text style={styles.subtituloPerfilCMY}>Ver perfil</Text>
          </View>
          <ChevronRight color={colors.gray[600]} size={20} />
        </TouchableOpacity>

        <View style={styles.containerConfiguracoesCMY}>
          {opcoesDeConfiguracaoCMY.map(opcaoCMY => {
            return (
              <TouchableOpacity
                key={opcaoCMY.id}
                style={styles.itemConfiguracaoCMY}
                onPress={() => aoPressionarOpcaoCMY(opcaoCMY.id)}
              >
                <View style={styles.ladoEsquerdoItemCMY}>
                  <Text style={styles.tituloItemCMY}>{opcaoCMY.title}</Text>
                </View>
                <ChevronRight color={colors.gray[600]} size={20} />
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[900],
  },
  cabecalhoCMY: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray[800],
  },
  botaoVoltarCMY: {
    padding: 4,
  },
  tituloCabecalhoCMY: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
  },
  ladoDireitoCabecalhoCMY: {
    width: 32,
  },
  secaoPerfilCMY: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray[800],
  },
  containerImagemPerfilCMY: {
    marginRight: 16,
  },
  imagemPerfilCMY: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.gray[700],
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoPerfilCMY: {
    flex: 1,
  },
  nomePerfilCMY: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
    marginBottom: 4,
  },
  subtituloPerfilCMY: {
    fontSize: 14,
    color: colors.gray[600],
  },
  containerConfiguracoesCMY: {
    paddingTop: 8,
  },
  itemConfiguracaoCMY: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray[800],
  },
  ladoEsquerdoItemCMY: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconeItemCMY: {
    fontSize: 20,
    marginRight: 16,
    width: 24,
    textAlign: 'center',
  },
  tituloItemCMY: {
    fontSize: 16,
    color: colors.white,
    flex: 1,
  },
})
