import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { createContext } from 'react';

export const LevelContext = createContext(1);

function Logo(){
  return <img src={logo} className="App-logo" alt="logo" />;
}

function Description(){
  return (
    <p>
      これはReactの練習用のページです。
    </p>
  );
}

function Section({ children }) {
  return (
    <section className="section">
      {children}
    </section>
  );
}

function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    default:
      throw Error('Unknown level: ' + level);
  }
}

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Description />
        {/* <input type="text" name="memo" value={text} onChange={(event) => setText(event.target.value)} placeholder="ここに予定を入力" maxlength="32"></input> */}
        {/* <button className="button" onClick={onSendButtonClick}>入力したら押せ</button> */}
        <Section level={1}>
          <Heading>2024年1月10日</Heading>
          <Section level={2}>
            <Heading>8:00 起床</Heading>
            <Heading>8:30 朝食</Heading>
            <Heading>10:00 掃除</Heading>
            <Heading>11:00 薪割り</Heading>
            <Heading>12:00 昼食</Heading>
            <Heading>13:00 散歩</Heading>
            <Heading>15:00 芋掘り</Heading>
          </Section>
        </Section>
        <Section level={1}>
          <Heading>2024年1月13日</Heading>
          <Section level={2}>
            <Heading>8:00 就寝</Heading>
            <Heading>16:00 起床</Heading>
            <Heading>16:30 夕食</Heading>
            <Heading>17:30 荷造り</Heading>
            <Heading>19:00 給油</Heading>
          </Section>
        </Section>
        <Section level={1}>
          <Heading>2024年1月17日</Heading>
          <Section level={2}>
            <Heading>12:00 柿</Heading>
            <Heading>13:00 イガグリ</Heading>
            <Heading>15:00 大豆</Heading>
            <Heading>16:30 磯辺揚げ</Heading>
            <Heading>20:00 玉蜀黍</Heading>
          </Section>
        </Section>
      </header>
    </div>
  );
}