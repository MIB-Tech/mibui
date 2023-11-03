import {Preview} from "../../../Components";
import {SIZING} from "../../../@types/Sizing.ts";
import {COLORS} from "../../../@types/Color.ts";
import {Slider} from "../../../Forms/Slider";

const ex1 = [{value: 0, label: "0"}, {value: 25, label: "25"}, {value: 50, label: "50"}, {
	value: 75,
	label: "75"
}, {value: 100, label: "100"},];

const marks = [{
	value: 0, label: "0°C"
}, {
	value: 20, label: "20°C"
}, {
	value: 37, label: "37°C"
}, {
	value: 100, label: "100°C"
}];
const MinMax = [
 {
	value: 5, label: "5"
},
	{
	value: 110, label: "110"
},];
const Step = [
	{
		value: 0, label: "0"
	},
	{
		value: 5, label: "5"
	},
	{
		value: 10, label: "10"
	},];

function Page() {

	return (
		<div className='flex flex-col gap-12'>
			<Preview title='Default' className='flex justify-center'>
				<Slider defaultValue={10}/>
			</Preview>

			<Preview title='Disabled' className='flex justify-center'>
				<Slider disabled valueLabelDisplay="none"/>
			</Preview>

			<Preview title='Min & Max' className='gap-2 items-center justify-center flex flex-col'>
				<Slider marks={MinMax} min={5} max={110}/>
			</Preview>

			<Preview title='Step' className='flex justify-center'>
				<Slider marks={Step} step={5}/>
			</Preview>

			<Preview title='Sizing'>
				<div className='gap-9 items-center justify-center flex flex-col '>
					{SIZING.map(size => (<Slider
							key={size}
							size={size}
						/>))}*
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
				<Slider marks={ex1}/>
			</Preview>

			<Preview title='Custom label'>
				<div className='gap-8 items-center justify-center flex flex-col '>
					Label always visible
					<Slider
						valueLabelDisplay='always'
						marks={marks}
						valueLabelFormat={(value) => `${value}C°`}
					/>
					Label visible in hover
					<Slider
						valueLabelDisplay='always'
						//	valueLabelFormat={(value) => `${value} C°`}
					/>
					<Slider valueLabelDisplay='none'/>
				</div>
			</Preview>
		</div>
	);
}


export default Page;
