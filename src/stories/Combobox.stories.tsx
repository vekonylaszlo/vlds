import type { Meta, StoryObj } from '@storybook/react'
import { ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxList, ComboboxPopup, ComboboxPortal, ComboboxPositioner, ComboboxRoot } from '../combobox';

const meta = {
	title: 'Example/Combobox',
	component: ComboboxRoot,


} satisfies Meta<typeof ComboboxRoot>;

export default meta;
type Story = StoryObj<typeof meta>;


export const ComboboxComponent: Story = {
	args: {
	},
	render: () => (
		<div className='flex flex-col gap-1 focus-visible:outline-none'>
			<ComboboxRoot items={fruits}>
				<ComboboxInput placeholder='Choose a fruit' />
				<ComboboxPortal>
					<ComboboxPositioner>
						<ComboboxPopup>
							<ComboboxEmpty >No fruit found.</ComboboxEmpty>
							<ComboboxList>
								{(item: string) => (
									<ComboboxItem key={item} value={item} >
										<ComboboxItemIndicator className="col-start-1">
											<CheckIcon className="size-3" />
										</ComboboxItemIndicator>
										<div className="col-start-2">{item}</div>
									</ComboboxItem>
								)}
							</ComboboxList>
						</ComboboxPopup>
					</ComboboxPositioner>
				</ComboboxPortal>
			</ComboboxRoot>
		</div>
	)
};

function CheckIcon(props: React.ComponentProps<'svg'>) {
	return (
		<svg fill="currentcolor" width="10" height="10" viewBox="0 0 10 10" {...props}>
			<path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
		</svg>
	);
}

const fruits = [
	'Apple',
	'Banana',
	'Orange',
	'Pineapple',
	'Grape',
	'Mango',
	'Strawberry',
	'Blueberry',
	'Raspberry',
	'Blackberry',
	'Cherry',
	'Peach',
	'Pear',
	'Plum',
	'Kiwi',
	'Watermelon',
	'Cantaloupe',
	'Honeydew',
	'Papaya',
	'Guava',
	'Lychee',
	'Pomegranate',
	'Apricot',
	'Grapefruit',
	'Passionfruit',
];
