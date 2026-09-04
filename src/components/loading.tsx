/** INTEGRANTES
 * Cauê Gomes Prieto
 * Murillo Batista Maquiné
 * Yago Matheus Santos Lima
 */

import { colors } from '@/styles/colors'
import { ActivityIndicator } from 'react-native'

export function Loading() {
  return <ActivityIndicator size="small" color={colors.green} />
}
