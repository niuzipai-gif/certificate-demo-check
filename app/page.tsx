const rows = [
  ["姓　　名", "蔡宙廷"],
  ["身份证号", "440307200401062317"],
  ["学　　校", "广东白云学院"],
  ["院　　系", "应用经济学院"],
  ["准考证号", "440261242115026"],
  ["考试时间", "2024年12月"],
  ["总　　分", "383"],
  ["　　听力(35%)", "119"],
  ["　　阅读(35%)", "153"],
  ["　　写作和翻译(30%)", "111"],
  ["口试准考证号", "--"],
  ["口试成绩", "--"],
  ["口试考试时间", "--"],
  ["成绩报告单编号", "242144026007879"],
  ["校 验 码", "AMOU C3H7 4CMW JZFO"],
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="phone-frame" aria-label="教学演示核验页面">
        <header className="top-bar">
          <span className="back" aria-hidden="true" />
          <span className="site-title">证书核验教学演示</span>
          <span className="menu-pill" aria-hidden="true">
            <i />
            <i />
            <i />
            <b />
            <em />
            <strong />
          </span>
        </header>

        <div className="demo-ribbon">DEMO 非官方页面</div>

        <section className="hero-copy" aria-labelledby="report-title">
          <p className="org-line">教学样例 · 非真实核验系统</p>
          <h1 id="report-title">大学英语四级模拟考试</h1>
          <h2>成绩报告单</h2>
        </section>

        <div className="tab-label">核验信息</div>

        <img
          className="portrait"
          src="/demo-portrait.png"
          alt="演示头像"
          width={108}
          height={144}
        />

        <section className="report-card">
          <div className="seal" aria-hidden="true">
            <span className="seal-a">A</span>
            <span className="seal-text">DEMO</span>
          </div>

          <dl className="info-grid">
            {rows.map(([label, value]) => (
              <div className="info-row" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <p className="notice">
          提示：该页面仅用于课堂/学生流程演示，不连接任何真实考试机构数据库，
          不代表真实证书、成绩或身份核验结果。
        </p>
        <p className="verify-time">演示生成时间：2026年08月03日00:12:44</p>
      </section>
    </main>
  );
}
