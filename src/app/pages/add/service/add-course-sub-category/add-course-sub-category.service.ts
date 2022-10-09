import { Injectable } from "@angular/core";
import { addDoc, collection, doc, Firestore, updateDoc } from "@angular/fire/firestore";
import { getDownloadURL, ref, Storage, uploadBytes } from "@angular/fire/storage";
import { from, switchMap } from "rxjs";

@Injectable({
    providedIn: 'platform'
})
export class AddCourseSubCategoryService {

    constructor(
        private storage: Storage,
        private firestore: Firestore
    ) { }

    addCourseSubCategory = (subCategoryData: any) => {
        return from(addDoc(collection(this.firestore, 'course-sub-categories'), subCategoryData));
    }

    updateCourseSubCategory = (subCategoryData: any) => {
        let ref = doc(this.firestore, 'course-sub-categories', subCategoryData.id);
        return from(updateDoc(ref, subCategoryData));
    }

    uploadSubCategoryImage = (image: File, path: string) => {
        let storageRef = ref(this.storage, path);
        let uploadTask = from(uploadBytes(storageRef, image));
        return uploadTask.pipe(
            switchMap((result) => getDownloadURL(result.ref))
        )
    }
}