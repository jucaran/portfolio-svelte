<script>
  import Character from './home/Character.svelte'
</script>

<!-- Home content -->
<section>
  <div class="profile_img">
    <div class="column" />
    <Character />
  </div>
  <header class="profile_txt">
    <div class="titles">
      <div class="row" />
      <h1>Juan</h1>
      <h2>Castro Arancibia</h2>
      <h3>UX/UI Designer | Full-stack web developer</h3>
    </div>
    <p>
      "Desde que era muy chico siempre me gusto jugar creando cosas. Empecé a usar Photoshop cuando
      tenía 13 y cree mi primer web con HTML y CSS cuando tenia 15. Después empecé a aprender
      Javascript y hoy tengo experiencia con ReactJS, NodeJS, Flutter, Python, Firebase y
      Kubernetes, entre otras tecnologías. También me encanta hacer música, sacar fotos y dibujar."
    </p>
    <a class="resume_link" target="_blank" href="./Juan_Castro_Arancibia_CVes.pdf"
      ><button class="cta">DESCARGAR CV</button></a
    >
    <a href="mywork.html"><button class="cta primary">MIRÁ MI TRABAJO</button></a>
  </header>
</section>
