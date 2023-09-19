import {Preview, TabComp} from "../../../Components";

const Page = () => {
  const orientations = ["horizontal", "vertical"];
  const colors = ["primary", "secondary", "success", "danger", "warning"]
  return (
    <div>
      <Preview title="Orientation">
        {orientations.map((orientation) => (
          <TabComp color="primary"
                   orientation={orientation}
                   tabs={[
                     {label: <h1>Tab 1</h1>, content: <h1>Content 1</h1>, value: 1},
                     {label: <h1>Tab 2</h1>, content: <h1>Content 2</h1>, value: 2},
                   ]}
          />
        ))}
      </Preview>
      <Preview title="Color">
        {colors.map((color) => (
          <TabComp color={color} orientation="vertical"
                   tabs={[
                     {
                       label: <h1>Tab 1</h1>, content: <h1>Aucun accès à Internet
                         Voici quelques conseils : Vérifiez les câbles réseau, le modem et le routeur.
                         Reconnectez-vous au réseau Wi-Fi Exécutez les diagnostics réseau de Windows ERR_INTERNET_DISCONNECTED
                         Aucun accès à Internet Voici quelques conseils :
                         Vérifiez les câbles réseau, le modem et le routeur. Reconnectez-vous au réseau Wi-Fi Exécutez les diagnostics réseau de Windows ERR_INTERNET_DISCONNECTED Aucun accès à Internet
                         Voici quelques conseils : Vérifiez les câbles réseau, le modem et le routeur. Reconnectez-vous au réseau Wi-Fi
                         Exécutez les diagnostics réseau de Windows ERR_INTERNET_DISCONNECTED
                         Aucun accès à Internet Voici quelques conseils : Vérifiez les câbles réseau, le modem et le routeur.
                         Reconnectez-vous au réseau Wi-Fi Exécutez les diagnostics réseau de Windows
                         ERR_INTERNET_DISCONNECTED Aucun accès à Internet
                         Voici quelques conseils : Vérifiez les câbles réseau, le modem et le routeur. Reconnectez-vous au réseau Wi-Fi Exécutez les diagnostics réseau de Windows
                         ERR_INTERNET_DISCONNECTED Voici quelques conseils : Vérifiez les câbles réseau, le modem et le routeur.
                         Reconnectez-vous au réseau Wi-Fi Exécutez les diagnostics réseau de Windows ERR_INTERNET_DISCONNECTED
                       </h1>, value: 1
                     },
                     {
                       label: <h1>Tab 2</h1>,
                       content: <h1> Reconnectez-vous au réseau Wi-Fi Exécutez les diagnostics réseau de Windows
                         ERR_INTERNET_DISCONNECTED Aucun accès à Internet Voici quelques conseils : Vérifiez les câbles
                         réseau, le modem et le routeur. Reconnectez-vous au réseau Wi-Fi Exécutez les diagnostics
                         réseau de Windows ERR_INTERNET_DISCONNECTED Aucun accès à Internet Voici quelques conseils :
                         Vérifiez les câbles réseau, le modem et le routeur. Reconnectez-vous au réseau Wi-Fi Exécutez
                         les diagnostics réseau de Windows ERR_INTERNET_DISCONNECTED Aucun accès à Internet Voici
                         quelques conseils : Vérifiez les câbles réseau, le modem et le routeur. Reconnectez-vous au
                         réseau Wi-Fi Exécutez les diagnostics réseau de Windows ERR_INTERNET_DISCONNECTED Aucun accès à
                         Internet Voici quelques conseils : Vérifiez les câbles réseau, le modem et le routeur.
                         Reconnectez-vous au réseau Wi-Fi Exécutez les diagnostics réseau de Windows
                         ERR_INTERNET_DISCONNECTED Aucun accès à Internet Voici quelques conseils : Vérifiez les câbles
                         réseau, le modem et le routeur. Reconnectez-vous au réseau Wi-Fi Exécutez les diagnostics
                         réseau de Windows ERR_INTERNET_DISCONNECTED</h1>,
                       value: 2
                     },
                   ]}
          />
        ))}
      </Preview>
      <Preview title="Orientation">
        <TabComp
          orientation="horizontal"
          tabs={[
            {label: <h1>Tab 1</h1>, content: <h1>Content 1</h1>, value: 1},
            {label: <h1>Tab 2</h1>, content: <h1>Content 2</h1>, value: 2},
          ]}
          color={"primary"}
          />
      </Preview>
    </div>

  );
};

export default Page;
