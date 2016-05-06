import React from 'react';
import styles from './styles.css';
import MainContainer from 'common/MainContainer';

export default class extends React.Component {
    render() {
        return (
            <MainContainer className={styles.about}>
                <h3>Vindsiden</h3>
                <p>
                    Formålet med løsningen er å samle data fra åpne vindstasjoner omkring i landet og tilby de ferskeste værdataene gratis.
                </p>
                <p>
                    Vårt prosjekt er ikke kommersielt, målingene distribueres fritt på internett.
                </p>
                <p>
                    Vi har ingen kommersiell produksjon av vindstasjonen, men gir gjerne ut en veiledning av hvordan den kan settes sammen.
                </p>
                <p>
                    Ideen vår er å utvikle en vindstasjon som sender data til en internett server, via GSM nettet.
                </p>
                <p>
                    Vi ønsker en stasjon som er så enkel som mulig, rimelig, ikke tilkoblet til en PC, kan drives med batteri og solcellepanel, og hvor softwaren er enkel å tilpasse.
                </p>
                <p>To be continued...</p>
            </MainContainer>
            );
        }
    }
