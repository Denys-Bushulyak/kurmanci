import React, {PropsWithChildren} from 'react';
import styles from './DirectSpeech.module.css';

interface DirectSpeechProps extends PropsWithChildren<{}>{
}

export function DirectSpeech(props: DirectSpeechProps){
    const [name, sentence] = props.children.toString().split(':');
    const [text, translation] = sentence.split('|');

    return (<p className={styles.root}>
        <span className={styles.name}>{name.trim()}</span><span className={styles.text}> {text.trim()} <i>{translation.trim()}</i></span></p>)
}
