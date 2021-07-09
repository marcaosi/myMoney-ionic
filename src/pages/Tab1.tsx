import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';


const Tab1: React.FC = () => {
  const [saldo, setSaldo] = useState(0)
  useEffect(() => {
    atualizaSaldo()
  }, [])

  const atualizaSaldo = () => {
    const saldo = localStorage.getItem("saldo")
    if(saldo != null)
      setSaldo(parseFloat(saldo))
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MyMoney</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={"R$ " + saldo} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
