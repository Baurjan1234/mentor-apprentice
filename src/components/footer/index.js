import React from "react";
import "./style.css";
const Footer = () => {
  return (
    <div className="footer">
      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Нүүр
              </a>
            </li>
            <li class="nav-item">
              <a href="#about" class="nav-link px-2 text-muted">
                Бидний тухай
              </a>
            </li>
            <li class="nav-item">
              <a href="#group" class="nav-link px-2 text-muted">
                Манай баг
              </a>
            </li>
            <li class="nav-item">
              <a href="#news" class="nav-link px-2 text-muted">
                Мэдээ
              </a>
            </li>
            <li class="nav-item">
              <a href="#feedback" class="nav-link px-2 text-muted">
                Санал хүсэлт
              </a>
            </li>
          </ul>
          <p class="text-center text-muted">© 2022 Mentor&Apprentice</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
