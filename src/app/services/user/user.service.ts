import { Injectable } from "@angular/core";
import { Auth, authState, createUserWithEmailAndPassword, updateProfile, UserInfo } from "@angular/fire/auth";
import { doc, docData, Firestore, setDoc, updateDoc } from "@angular/fire/firestore";
import { getDownloadURL, ref, Storage, uploadBytes } from "@angular/fire/storage";
import { concatMap, from, Observable, of, switchMap } from "rxjs";
import { userData } from "src/app/models/user-data/user-data.model";
import { AuthService } from "../Auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    profileData: userData[] = [];
    currentUser$ = authState(this.auth);

    constructor(
        private auth: Auth,
        private authService: AuthService,
        private firestore: Firestore,
        private storage: Storage
    ) { }

    createUser = (email: string, password: string) => {
        return from(createUserWithEmailAndPassword(this.auth, email, password));
    }

    updateProfile = (profileData: Partial<UserInfo>): Observable<any> => {
        let user = this.auth.currentUser;
        return of(user).pipe(
            concatMap((user) => {
                if (!user) throw new Error('Not Authenticated');
                return updateProfile(user, profileData);
            })
        )
    }

    get currentUserProfile$(): Observable<userData | null> {
        return this.currentUser$.pipe(
            switchMap((user) => {
                if (!user?.uid) {
                    return of(null);
                }
                else {
                    let ref = doc(this.firestore, 'users', user?.uid);
                    return docData(ref) as Observable<userData>;
                }
            })
        )
    }

    addUser = (user: userData): Observable<any> => {
        let ref = doc(this.firestore, 'user', user?.uid);
        return from(setDoc(ref, user));
    }

    updateUser = (user: userData): Observable<any> => {
        let ref = doc(this.firestore, 'user', user?.uid);
        return from(updateDoc(ref, { ...user }));
    }

    uploadProfileImage = (image: File, path: string): Observable<string> => {
        let storageRef = ref(this.storage, path);
        let uploadTask = from(uploadBytes(storageRef, image));
        return uploadTask.pipe(
            switchMap((result) => getDownloadURL(result.ref))
        );
    }

}