import React from 'react';
import styles from "./Tweet.module.css";

const Tweet = ({ tweet }) => {
  const parsedDate = new Date(tweet.createdAt).toLocaleDateString('ko-kr');

  return (
    <li className={styles.tweet} id={tweet.id}>
      <div className={styles.tweet__profile}>
        <img src={tweet.picture} />
      </div>
      <div className={styles.tweet__content}>
        <div className={styles.tweet__userInfo}>
          <div className={styles["tweet__userInfo--wrapper"]}>
            {/* TODO : 유져 이름이 있어야 합니다. */}
            {/* TODO : 트윗 생성 일자가 있어야 합니다. parsedDate를 이용하세요. */}
            <span className={styles.tweet__username}>{tweet.username}</span>
            <span className={styles.tweet__createdAt}>{parsedDate}</span>
          </div>
        </div>
        <div className={styles.tweet__message}>
          {/* TODO : 트윗 메세지가 있어야 합니다. */}
          {tweet.content}
        </div>
      </div>
    </li>
  );
};

export default Tweet;
