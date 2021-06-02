import { useMutation } from 'react-query';
import { TransactionResponse, TransactionType } from '../types';
import { sendTransaction } from '../utils/sendTransaction';

interface MintArgs {
	contract_address: string;
	token1Amount: string;
	token2Amount: string;
	accountId: string;
}

export const useMint = () => {
	return useMutation<TransactionResponse, Error, MintArgs>(
		async ({ accountId, token1Amount, token2Amount, contract_address }) => {
			const result = await sendTransaction({
				contract_address,
				entry_point_selector: '0x120ae4faee4a97bc466bde8ca3c7db157f3cf16e8a66acf49c2c4d0a068e89c',
				type: TransactionType.INVOKE_FUNCTION,
				calldata: [accountId, token1Amount, token2Amount],
			});

			return result;
		},
	);
};