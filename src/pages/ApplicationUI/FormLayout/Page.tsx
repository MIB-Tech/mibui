import {Autocomplete, FormGroup, Input, InputNumber, Label, Select} from '../../../Forms';
import {twMerge} from 'tailwind-merge';
import {DatePickerExample} from '../../Forms/DatePicker/DatePage.tsx';
import {Button, ButtonGroup, Card} from '../../../Components';
import {PurchaseOrderProductDataGridExample} from './Examples/PurchaseOrderProductDataGridExample.tsx';

const Page = () => (
	<div className='flex flex-col space-y-10'>
		<Card
			footer={(
				<div className='flex space-x-3 justify-end'>
					<Button>
						Enregistrer
					</Button>
					<Button disabled>
						Génerer bon de réception
					</Button>
				</div>
			)}
		>
			<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
				<FormGroup>
					<Label>N° Pièce</Label>
					<Input/>
				</FormGroup>
				<FormGroup>
					<Label>Founisseur</Label>
					<Autocomplete
						options={[
							{id: 1, name: 'Fournisseur 1', code: 'vnd_0001'},
							{id: 2, name: 'Fournisseur 2', code: 'vnd_0002'},
							{id: 3, name: 'Fournisseur 3', code: 'vnd_0003'},
						]}
						getOptionLabel={option => `${option.code}: ${option.name}`}
						renderOption={(props, option) => (
							<li {...props} className={twMerge('text-sm', props.className)}>
								<div>{option.name}</div>
								<div className='text-gray-500'>code: {option.code}</div>
							</li>
						)}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Date de pièce</Label>
					<DatePickerExample/>
				</FormGroup>
				<FormGroup>
					<Label>Acronyme</Label>
					<ButtonGroup variant='light' activeVariant='solid'>
						<Button active>HT</Button>
						<Button>TTC</Button>
					</ButtonGroup>
				</FormGroup>
				<FormGroup>
					<Label>Réf. pièce</Label>
					<Input/>
				</FormGroup>
				<FormGroup>
					<Label>Réf. externe</Label>
					<Input/>
				</FormGroup>
				<FormGroup>
					<Label>Réception prévue</Label>
					<DatePickerExample/>
				</FormGroup>
				<FormGroup>
					<Label>Devise</Label>
					<Select
						defaultValue={{id: 1, code: 'MAD'}}
						options={[
							{id: 1, code: 'MAD'},
							{id: 2, code: 'EUR'},
						]}
						getOptionLabel={option => option.code}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Budget</Label>
					<InputNumber/>
				</FormGroup>
			</div>
    </Card>
    <div className='flex flex-col space-y-4'>
      <div className='font-semibold text-2xl'>
        Produits
      </div>
      <PurchaseOrderProductDataGridExample/>
      <div>
        <Button>
          Ajouter
        </Button>
      </div>
    </div>
  </div>
);


export default Page;
