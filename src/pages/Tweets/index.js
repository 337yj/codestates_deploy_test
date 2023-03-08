// TODO : useState를 react로 부터 import 합니다.
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Layout/Footer';
import Tweet from '../../components/Tweet';
import styles from "./Tweets.module.css";
import dummyTweets from '../../static/dummyData';

const getRandomNumber = (min, max) => {
  return parseInt(Math.random() * (Number(max) - Number(min) + 2));
};

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
  //💡MEMO: 새로고침시에도 tweet추가한 값을 유지하고 싶어서 코드를 짜봤는데 이것저것 섞여서 복잡해보이는거 같아요.. 더 좋은 방법있을까요?
  const [tweets, setTweets] = useState(
    localStorage.getItem(dummyTweets) 
    ? JSON.parse(localStorage.getItem(dummyTweets))
    : dummyTweets);
  
  useEffect(() => {
    const tweets_local = localStorage.getItem(dummyTweets);
    if (tweets_local) {
      setTweets(JSON.parse(tweets_local));
    }
  }, []);

  useEffect(() => {
    if (tweets) {
      localStorage.setItem(dummyTweets, JSON.stringify(tweets));
    }
  }, [tweets]);

  const [form, setForm] = useState({user: "parkhacker", msg: ""});

  const sortedtweets = tweets.sort((a, b) => (b.id - a.id));

  const handleButtonClick = (event) => {
    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.
    const tweet = {
      id: tweets.length + 1,
      username: form.user,
      picture: form.user === "parkhacker" ? 
      `https://randomuser.me/api/portraits/men/98.jpg` 
       :`https://randomuser.me/api/portraits/women/${getRandomNumber(1,98)}.jpg`,
      content: form.msg,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    setTweets((prev)=>([...prev, tweet]));
    setForm({user: "parkhacker", msg: ""});
  };
 
  const handleChangeInput = (event) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    const {name, value} = event.currentTarget;
    setForm({...form, [name]: value});
  };

  return (
      <React.Fragment>
      <div className={styles.tweetForm__container}>
        <div className={styles.tweetForm__wrapper}>
          <div className={styles.tweetForm__profile}>
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className={styles.tweetForm__inputContainer}>
            <div className={styles.tweetForm__inputWrapper}>
              <div className={styles.tweetForm__input}>
                <input
                  type="text"
                  placeholder="your username here.."
                  name="user"
                  value={form.user}
                  className={styles["tweetForm__input--username"]}
                  onChange={handleChangeInput}
                ></input>
                {/* TODO : 트윗을 작성할 수 있는 textarea 엘리먼트를 작성하세요. */}
                <textarea
                  type="text"
                  placeholder='your tweet here..'
                  name="msg"
                  value={form.msg}
                  className={styles["tweetForm__input--message"]}
                  onChange={handleChangeInput}
                  ></textarea>
              </div>
              <div className={styles.tweetForm__count} role="status">
                <span className={styles.tweetForm__count__text}>
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  total: {tweets.length}
                </span>
              </div>
            </div>
            <div className={styles.tweetForm__submit}>
              <div className={styles.tweetForm__submitIcon}></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button 
                type="button"
                className={styles.tweetForm__submitButton}
                onClick={handleButtonClick}
              >Tweet</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tweet__selectUser}></div>
      <ul className={styles.tweets}>
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}  
        {
          sortedtweets.map((tweet)=>{
            return <Tweet key={tweet.id} tweet={tweet} />
          })
        }
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;