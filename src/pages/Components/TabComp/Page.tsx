import {Preview, TabComp} from "../../../Components";
import {COLORS} from "../../../@types/Color.ts";
const Page = () => {
  return (
    <div>
      <Preview title="Orientation">
        <TabComp
          color='primary'
          orientation="vertical"
          tabs={[
            {label: <h1>Tab 1</h1>, content: <h1>Content 1</h1>, value: 1},
            {label: <h1>Tab 2</h1>, content: <h1>Content 2</h1>, value: 2},
          ]}
        />
        <TabComp
          color='primary'
          orientation="horizontal"
          tabs={[
            {label: <h1>Tab 1</h1>, content: <h1>Content 1</h1>, value: 1},
            {label: <h1>Tab 2</h1>, content: <h1>Content 2</h1>, value: 2},
          ]}
        />

      </Preview>
      <Preview title="Color">
        {COLORS.map((color) =>(<TabComp
          color={color}
          orientation={"vertical"}
          tabs={[
            {
              label: <h1>Tab 1</h1>, content: <h1>Aucun accès à Internet
                Voici quelques conseils : Vérifiez les câbles réseau, le modem et le routeur.
                Reconnectez-vous au réseau Wi-Fi Exécutez les diagnostics réseau de Windows ERR_INTERNET_DISCONNECTED
                Aucun accès à Internet Voici quelques conseils :
                Vérifiez les câbles réseau, le modem et le routeur. Reconnectez-vous au réseau Wi-Fi Exécutez les
                diagnostics réseau de Windows ERR_INTERNET_DISCONNECTED Aucun accès à Internet
                Voici quelques conseils : Vérifiez les câbles réseau, le modem et le routeur. Reconnectez-vous au
                réseau Wi-Fi
                Exécutez les diagnostics réseau de Windows ERR_INTERNET_DISCONNECTED
                Aucun accès à Internet Voici quelques conseils : Vérifiez les câbles réseau, le modem et le routeur.
                Reconnectez-vous au réseau Wi-Fi Exécutez les diagnostics réseau de Windows
                ERR_INTERNET_DISCONNECTED Aucun accès à Internet
                Voici quelques conseils : Vérifiez les câbles réseau, le modem et le routeur. Reconnectez-vous au
                réseau Wi-Fi Exécutez les diagnostics réseau de Windows
                ERR_INTERNET_DISCONNECTED Voici quelques conseils : Vérifiez les câbles réseau, le modem et le
                routeur.
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
        />))}

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
