/* eslint-disable no-unused-vars */
import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import DetailMentor from '../commons/DetailMentor';
import './Chat.css';

const chat = [
  {
    mentor: 'doibat568',
    msg: [
      {
        id: 0,
        from: 'user',
        message:
          'Hello, i liked your live training about how to UseState. I would like to have a private lesson about Hooks in React? Are you available for this kind of mentoring?',
        to: 'mentor',
      },
      {
        id: 1,
        from: 'mentor',
        message:
          'Hello, actually i have some times this week. How much time do you need for this lesson?',
        to: 'user',
      },
      {
        id: 2,
        from: 'user',
        message: 'I would like to have one hour lesson, wednesday afternoon',
        to: 'mentor',
      },
      {
        id: 3,
        from: 'mentor',
        message:
          'I will send you a request wednesday, the lesson will cost 15 euros and will start at 2pm',
        to: 'user',
      },
      {
        id: 4,
        from: 'user',
        message: 'Perfect for me, see you tomorrow',
        to: 'mentor',
      },
    ],
  },
  {
    mentor: 'Hourubi44',
    msg: [
      {
        id: 0,
        from: 'user',
        message:
          'Good morning, i am curious about wichcraft, can you explain me basics during one hour?',
        to: 'mentor',
      },
      {
        id: 1,
        from: 'mentor',
        message:
          'Hello, well I can explain you theories about it- it would cost 5euros',
        to: 'user',
      },
      {
        id: 2,
        from: 'user',
        message: 'Ok, this is good for me , my availabilty are this week-end',
        to: 'mentor',
      },
      {
        id: 3,
        from: 'mentor',
        message: 'this week-end ids ok for me, saturday 3 pm',
        to: 'user',
      },
      {
        id: 4,
        from: 'user',
        message: 'Perfect for me, see you saturday',
        to: 'mentor',
      },
    ],
  },
  {
    mentor: 'juio36',
    msg: [
      {
        id: 0,
        from: 'user',
        message:
          'Hello, I am curious about sewing skills, can you teach me how to sew a button',
        to: 'mentor',
      },
      {
        id: 1,
        from: 'mentor',
        message:
          'Hello, actually i can do it in a half a hour, so it would cost 7 euros',
        to: 'user',
      },
      {
        id: 2,
        from: 'user',
        message:
          'That sounds cool!! So tomorrow at 9 am is ok, but it is up to you',
        to: 'mentor',
      },
      {
        id: 3,
        from: 'mentor',
        message: 'okey, then see you tomorrow, i will send a request',
        to: 'user',
      },
      {
        id: 4,
        from: 'user',
        message: 'Thanx see U',
        to: 'mentor',
      },
    ],
  },
  {
    mentor: 'LeProf58',
    msg: [
      {
        id: 0,
        from: 'user',
        message:
          'Hello, i would like a training on how to behave during an interview',
        to: 'mentor',
      },
      {
        id: 1,
        from: 'mentor',
        message:
          'Hello, you have to take some times to train yourself, i think that 2 hours could be a great idea for that',
        to: 'user',
      },
      {
        id: 2,
        from: 'user',
        message: 'You are the expert, so it is ok for me',
        to: 'mentor',
      },
      {
        id: 3,
        from: 'mentor',
        message: 'I am available this afternoon around 6pm',
        to: 'user',
      },
      {
        id: 4,
        from: 'user',
        message: 'Perfect for me, see you soon',
        to: 'mentor',
      },
    ],
  },
];

function MessageChat() {
  const [currentMentor, setCurentMentor] = useState('doibat568');
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [array, setArray] = useState(chat);

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInput('');
    setMessages([...messages, userInput]);
  };

  // const allMessages = chat.msg.map((text) => [text.message]);

  // eslint-disable-next-line no-console
  console.log(chat);

  return (
    <div>
      <MainLayout>
        <div className="wrapChat">
          <div className="blocBG">
            {chat.map((element) => (
              <DetailMentor
                {...element}
                setCurentMentor={setCurentMentor}
                setArray={setArray}
                chat={chat}
              />
            ))}
          </div>
          <div className="chatContent">
            {array[0].msg.map((element) => (
              <li
              /* className={from === 'user' ? 'textChatRight' : 'textChatLeft'} */
              >
                {element.message}
              </li>
            ))}
            <form onSubmit={handleSubmit} className="chatText">
              <input
                className="chatInput"
                type="text"
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
              />
              <button className="chatButton" type="button">
                Send
              </button>
            </form>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default MessageChat;
