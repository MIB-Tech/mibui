import {Preview} from "../../../Components";
import {SIZING} from "../../../@types/Sizing.ts";
import {COLORS} from "../../../@types/Color.ts";
import {Slider} from "../../../Forms/Slider";


function Page() {

	return (
		<div className='flex flex-col gap-12'>
			<Preview title='Default' className='flex justify-center'>
				<Slider defaultValue={10} valueLabelDisplay='always'/>
			</Preview>
			<Preview title='Disabled' className='flex justify-center'>
				<Slider disabled valueLabelDisplay="none"/>
			</Preview>
			<Preview title='Min & Max' className='gap-2 items-center justify-center flex flex-col'>
				<Slider marks={[5,110].map(value => ({value, label: value}))} min={5} max={110}/>
			</Preview>
			<Preview title='Step' className='flex justify-center'>
				<Slider marks={[0, 5, 10].map(value => ({value, label: value}))}
								step={5}/>
			</Preview>
			<Preview title='Sizing'>
				<div className='gap-9 items-center justify-center flex flex-col '>
					{SIZING.map(size => (<Slider
							key={size}
							size={size}
						/>))}
				</div>
			</Preview>
			<Preview title='Colors'>
				<div className='gap-9 items-center justify-center flex flex-col'>
					{COLORS.map(color => (<Slider
							key={color}
							color={color}
						/>))}
				</div>
			</Preview>
			<Preview title='Marks'>
				<Slider marks step={5}/>
			</Preview>
			<Preview title='Marks with label' className='gap-9 items-center justify-center flex flex-col'>
				<Slider
					marks={[0, 25, 50, 75, 100].map(value => ({value, label: value}))}
				/>
			</Preview>
			<Preview title='Custom label'>
				<div className='gap-8 items-center justify-center flex flex-col '>
					Label always visible
					<Slider
						valueLabelDisplay='always'
						marks={[0, 20, 37, 100].map(value => ({value, label: `${value}C°`}))}
						valueLabelFormat={(value) => `${value}°C`}
					/>
					Label visible in hover
					<Slider
						valueLabelDisplay='hover'
					/>
					<Slider valueLabelDisplay='none'/>
				</div>
			</Preview>
		</div>
	);
}


export default Page;
