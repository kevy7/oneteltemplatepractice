import React from 'react';
import styles from './InfoComponent.module.css';

const infoComponent = () => {
    return (
        <div className={styles.infoComponent}>
            <div className={styles.imgBackground}></div>
            <div className={styles.infoDescription}>
                <h1 className={styles.title}>Title Here</h1>
                <p className={styles.infoParagraph}>This is a random paragraph. sdngkjsdn d fdsnfklds fnds lfndsf lsd flsdknf dslknf ldsn flds fds fn lkn fsdlnf sdkn f</p>
                <p className={styles.infoParagraph}>
                    tjisdf ks djlsnfld fldsnflds flds fdknf dfl dlfmn dslkn flsd flknlfkn dlf l flkdn flkns fldsn flds fld  dslfn lfndsf
                    sdnfjlnfldf  fldks fds flkdn flnds fldkn flns flnd fskldn fnflknmdsklf eij rw dsbfuhewi jw guhbw eofhowhf oshf sf jf
                    sfhu eoh owihg orhfgoh wfh j kj giewj uwhfo hejh ighoije pjfpiwfoi sdfno.
                </p>
                <button className={styles.infoButton}>Click Me</button>
            </div>
        </div>
    )
}

export default infoComponent;