import { useQuery } from 'react-query'

import { bitcoinClient } from '../util/bitcoin-client.ts'

export function useCommand(command: string, ...args: any[]) {
  return useQuery<any, any>({
    queryKey: [command, ...args],
    queryFn: () => bitcoinClient.command(command, ...args)
  })
}
