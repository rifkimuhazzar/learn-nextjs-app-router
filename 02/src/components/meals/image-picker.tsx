"use client";

import Image from "next/image";
import { type ChangeEvent, useRef, useState } from "react";

import styles from "./image-picker.module.css";

export default function ImagePicker({ label, name }: any) {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(
    null,
  );
  const imageInputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    imageInputRef.current?.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => setPickedImage(fileReader.result);
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.control}>
        <div className={styles.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage.toString()}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input
          className={styles.input}
          id={name}
          name={name}
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleImageChange}
          ref={imageInputRef}
          required
        />
        <button className={styles.button} type="button" onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
