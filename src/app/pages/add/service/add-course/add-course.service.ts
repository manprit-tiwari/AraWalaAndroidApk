import { Injectable } from "@angular/core";
import { addDoc, collection, doc, Firestore, setDoc, updateDoc } from "@angular/fire/firestore";
import { getDownloadURL, ref, Storage, uploadBytes, uploadBytesResumable } from "@angular/fire/storage";
import { HotToastService } from "@ngneat/hot-toast";
import { from, Observable, switchMap } from "rxjs";
import { UserService } from "src/app/services/user/user.service";

@Injectable({
    providedIn: 'any'
})
export class AddCourseService {

    constructor(
        private storage: Storage,
        private fireStore: Firestore,
        private toast: HotToastService
    ) { }

    uploadCourseVedio = (vedio: File, path: string) => {
        let storageRef = ref(this.storage, path);
        let uploadTask = uploadBytesResumable(storageRef, vedio);
        // return uploadTask.pipe(
        //     switchMap((result) => getDownloadURL(result.ref))
        // );
        uploadTask.on('state_changed', (snapshot) => {
            let uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.toast.loading(`Upload is ${uploadProgress}% done.`);
        },
            (error) => {
                this.toast.error('Error while uploading.');
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
                    return downloadURL;
                });
            })
    }

    uploadCourseThumbnail = (thumbnail: File, path: string): Observable<string> => {
        let storageRef = ref(this.storage, path);
        let uploadTask = from(uploadBytes(storageRef, thumbnail));
        return uploadTask.pipe(
            switchMap((result) => getDownloadURL(result.ref))
        );
    }

    addCourse = (courseInfo: any) => {
        // let uuid = crypto.randomUUID();
        // let ref = doc(this.fireStore, 'courses', uuid)
        // return from(setDoc(ref, courseInfo));
        return from(addDoc(collection(this.fireStore, 'courses'), courseInfo));
    }

    updateCourse = (courseInfo: any) => {
        let ref = doc(this.fireStore, 'courses', courseInfo.id);
        return from(updateDoc(ref, courseInfo));
    }
}