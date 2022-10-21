<script>
	const toggleMenu = () => {};
</script>

<!-- Sidebar -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<span on:click={toggleMenu} id="sidebar_btn" class="icon-align-left" />
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={toggleMenu} class="sidebar_closer" />
<nav class="sidebar">
	<ul class="menu_items">
		<li class="menu_item">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span on:click={toggleMenu} id="sidebar_btn_close" class="icon-x-circle" />
		</li>
		<li class="menu_item">
			<a href="index.html"> <span class="icon-home" /><span class="item_txt">Inicio</span> </a>
		</li>
		<li class="menu_item">
			<a class="resume_link" target="_blank" href="./Juan_Castro_Arancibia_CVes.pdf">
				<span class="icon-user" /><span class="item_txt">Descargar CV</span>
			</a>
		</li>
		<li class="menu_item">
			<a href="mywork.html">
				<span class="icon-paperclip" /><span class="item_txt">Mi trabajo</span>
			</a>
		</li>
		<li class="menu_item">
			<a href="contact.html">
				<span class="icon-message-circle" /><span class="item_txt">Contactame!</span>
			</a>
		</li>
	</ul>
</nav>
