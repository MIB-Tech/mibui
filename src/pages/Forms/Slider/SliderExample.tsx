
import {Slider} from "../../../Forms/Slider";

 function SliderExample() {
	return (
		<div>
			<h2>Exemple de Slider</h2>

			<h3>Slider par défaut</h3>
			<Slider defaultValue={50} />

			<h3>Slider désactivé</h3>
			<Slider disabled />

			<h3>Slider avec des marques (marks)</h3>
			<Slider
				marks={[
					{ value: 0, label: '0' },
					{ value: 25, label: '25' },
					{ value: 50, label: '50' },
					{ value: 75, label: '75' },
					{ value: 100, label: '100' },
				]}
			/>

			<h3>Slider avec une taille différente</h3>
			<Slider size="sm" />

			<Slider size="lg" />

			<h3>Slider avec des couleurs différentes</h3>
			<Slider color="primary" />

			<Slider color="secondary" />

			<h3>Slider avec étiquettes de valeur personnalisées</h3>
			<Slider
				valueLabelDisplay="always"
				marks={[
					{ value: 0, label: '0°C' },
					{ value: 20, label: '20°C' },
					{ value: 37, label: '37°C' },
					{ value: 100, label: '100°C' },
				]}
				valueLabelFormat={(value) => `${value} C°`}
			/>
		</div>
	);
}

export default SliderExample;
