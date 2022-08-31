import React from "react";
import './App.css'
const App = () => {
  return(
    <div className="colorChange">
    <div class="App">
    <div class="header">
       <div id="name">
        <a href="">StudentText</a>
        <div className="searchBox">
        <input type="text" className="inputBox" placeholder="Search among tests..."/>
        <span><i class="fa-solid fa-magnifying-glass"></i></span>
        </div>
        <span className="two"><i class="fa-solid fa-user"></i></span>
    </div>
       
    </div>
    <input type="checkbox" id="openSidebarMenu"/>
    <label for="openSidebarMenu" class="sidebarIconToggle">
        <div className="spinner top"></div>
        <div className="spinner middle"></div>
        <div className="spinner bottom"></div>
    </label>
    <div id="sidebarMenu">
        <ul className="menu">
            <li><a href="https://www.researchgate.net/figure/Intellectual-complexity-of-questions-in-each-exam-Question-difficulty-assesses-the_fig5_235667115">Intellectual</a></li>
            <li><a href="https://in.indeed.com/career-advice/finding-a-job/best-jobs-for-college-students">Career</a></li>
            <li><a href="https://in.pinterest.com/ebuva/student-humour/">Funny</a></li>
            <li><a href="https://www.marketingweek.com/content-for-real-men/">For men</a></li>
            <li><a href="https://blog.influenceandco.com/international-womens-day-content">For Women</a></li>
            <li><a href="https://www.verywellmind.com/family-love-how-to-create-it-and-sustain-it-5193643">Love and family</a></li>
            <li><a href="https://in.mashable.com/tech/10343/youtubes-new-kids-content-policy-is-a-step-in-the-right-direction-but-its-not-a-cure-all">For children</a></li>
            <li><a href="https://custom-writing.org/blog/best-health-medical-research-topics">Health</a></li>
            <li><a href="#">Contacts</a></li>
            <li><a href="https://www.entrepreneur.com/article/200220">For copyright holders</a></li>
            <li><a href="">Terms of use</a></li>
            <li><a href="">Privacy</a></li>
        </ul>
    </div>
    
    <div className="main">
        <h1>Tests online</h1>
        <p>psychological, educational, IQ</p>
        <div class="container">
            <div className="flex1">
        <select className="selectone">
          <option>Category</option>
            <option>Personality and character</option>
            <option>Temperament </option>
            <option>Interpersonal relationship</option>
            <option>Diagnosis of disorders</option>
            <option>Educational</option>
            <option>Intellectual</option>
            <option>Career</option>
            <option>Funny</option>
            <option>For men</option>
            <option>Love and family</option>
            <option>For children</option>
            <option>Health</option>
        </select>
    </div>
    <div className="flex2">
        <select className="selecttwo">
          <option className="change">Filter</option>
            <option>All</option>
            <option>In Process</option>
            <option>Completed</option>
            <option>Not Completed </option>
            <option>Professional</option>
            <option>Up to 2 min</option>
            <option>2 - 5min</option>
            <option>5 - 10min</option>
            <option>More than 10min</option>
        </select>
    </div>
    <div className="third">
    <select className="selectthree">
      <option>Popular</option>
      <option>Newset First</option>
      <option>Oldest First</option>
      <option>Popular</option>
      <option>A-Z</option>
      <option>Z-A</option>
    </select>
    </div>
    </div>
    
    </div>
    <div className="Container_1">
      <span className="btn1"><span className="image">
      <img src="https://cdn6.aptoide.com/imgs/f/8/1/f81df501d964ac7ee45587eccb60b73b_icon.png"/>
      </span>
      <a href="https://www.varsitytutors.com/linear_algebra-help/matrix-vector-product">Matric Exam Text</a></span>


      <span className="btn2"><span className="image1"><img src="https://image.shutterstock.com/z/stock-vector-grunge-green-intermediated-word-squre-rubber-seal-stamp-on-white-background-1795723183.jpg"/></span>
        
        <a href="https://www.usingenglish.com/quizzes/30.html">Intermediate Exam Text</a></span>
    </div>


    <div className="Container_2">

    <span className="btn3"><span className="image">
      <img src="https://i.pinimg.com/564x/9d/de/56/9dde5681a575b8e70af0c88569768fae.jpg"/>
      </span>
      <a href="https://www.examsbook.com/gk-mcq-questions-for-competitive-exams">Graduation Exam Text</a></span>


      <span className="btn4"><span className="image1"><img src="https://as2.ftcdn.net/v2/jpg/01/06/07/05/1000_F_106070567_soxtDDWblrF0ziG58LJQbW5FN3lAY5RG.jpg"/></span>
        
        <a href="https://mcqslearn.com/mba/perfect-competition-test.php">MBA Exam Text</a></span>
    </div>


    <div className="Container_3">
    <span className="btn5"><span className="image">
      <img src="https://play-lh.googleusercontent.com/lMmzfj2TNAnQ2pYQ9xq2JHNm5nCn_FOXn8vcjhXBcj76izEVNtZYz4KV1YH_C7qKNpJc=w240-h480-rw"/>
      </span>
      <a href="https://www.examsbook.com/gk-mcq-questions-for-competitive-exams">ITI Exam Text</a></span>
    </div>
    </div>
    </div>
    
  )
}
export default App;