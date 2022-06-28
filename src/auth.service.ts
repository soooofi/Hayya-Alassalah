import { Injectable } from "@angular/core";
import { AngularFireModule } from "@angular/fire/compat";
import { Observable } from "rxjs";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import * as firebase from 'firebase/compat/app';
import { User } from "@firebase/auth";
/*------------for monthly------------------------- */
import { Firestore, collectionData} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore'
import { LoginPageRoutingModule } from "./app/login/login-routing.module";

/*------------for monthly------------------------- */
interface user 

{
    username: string,
    uid:string
}
interface Note 
{
    id?: string;
    fajr: string;
    dhuhr: string;
    asr: string;
    maghrib: string;
    isha: string;
    day: number;
    month: string;
    year: number;
    chhotapara_mosque:string;
}

@Injectable ({
    providedIn:'root'
})
/*------------for monthly------------------------- */
export class DataService {

    constructor(private firestore: Firestore){ }

    getNotes(): Observable<Note[]>{

        const monRef = collection(this.firestore, 'prayerTimings');
       /*  const mosqRef = collection(this.firestore, 'mosques');*/
        return collectionData(monRef, {idField: 'id'}) as Observable<Note[]>;
    }
    getNotesById(): Observable<Note[]>{

        
        const name = collection(this.firestore, 'mosques');
        return collectionData(name, {idField: 'id'}) as Observable<Note[]>;
    }
}
/*------------for monthly------------------------- */
export class AuthService {
    Auth: any
    private user:user

    constructor( private auth: AngularFireAuth) { }

    login(email: string, password: string) : Observable<{email: string,id: string}> {
        return new Observable<{email: string,id: string}>(observer => {
            this.auth.setPersistence(firebase.default.auth.Auth.Persistence.LOCAL).then( () => {
                this.auth.signInWithEmailAndPassword(email, password).then((
                    firebaseUser: firebase.default.auth.UserCredential) => {
                      
                        observer.next({email, id: firebaseUser.user.uid});
 
                        observer.complete();
                    }).catch(error => {
                        observer.error(error);
                        observer.complete();
                    });
                    
            })
        })
    }
}





