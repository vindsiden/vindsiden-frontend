import React from 'react';
import styles from './styles.css';
import Select from 'react-select';
import 'node_modules/react-select/scss/default.scss'

class MapView extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.image}/>
                <div className={styles.title}>
                    <h1 className={styles.main}>Vindsiden</h1>

                    <p className={styles.sub}>Her kommer vindsiden-map</p>
                    <p className={styles.sub} style={{fontSize: '0.75em'}}>F.eks. med ulike definerte områder:</p>

                    <form className={styles.form}>
                        <Select
                            className={styles.select}
                            placeholder="Område"
                            options={[
                                'Østlandet',
                                'Sørlandet',
                                'Vestlandet',
                                'Midtnorge',
                                'Nord'
                            ].map(region => ({label: region, value: region}))
                        }
                        />

                        <button className={styles.button} type="submit">Vis</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default MapView;
