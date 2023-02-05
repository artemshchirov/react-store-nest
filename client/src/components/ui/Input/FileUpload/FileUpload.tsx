import React, {
  useState,
  useEffect,
  forwardRef,
  ForwardedRef,
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";
import classNames from "classnames";
import styles from "./FileUpload.module.scss";

interface IFileUploadProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  label?: string;
  error?: string;
  isRequired?: boolean;
}

export const FileUpload = forwardRef(
  (
    { className, label, error, isRequired, ...rest }: IFileUploadProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | undefined>(undefined);

    useEffect(() => {
      if (!selectedFile) {
        setPreview(undefined);
        return;
      }
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    const onSelectFile = (evt: any) => {
      const files = evt.target.files;
      if (!files || files === 0) {
        setSelectedFile(null);
        return;
      }
      setSelectedFile(files[0]);
    };

    // FIXME No file chosen even if file chosen (on modal opening)
    return (
      <div className={styles.file}>
        <label className={styles.file__label} htmlFor="file">
          {label}
          {isRequired && <span className={styles.file__label_required}>*</span>}
        </label>
        <input
          className={classNames(className, styles.file__input, {
            [styles.file_error]: !selectedFile && error,
          })}
          name="file"
          type="file"
          ref={ref}
          {...rest}
          onChange={onSelectFile}
        />

        {!selectedFile && error && (
          <span className={styles.file_error}>{error}</span>
        )}
        {selectedFile && <img className={styles.file__preview} src={preview} />}
      </div>
    );
  }
);
