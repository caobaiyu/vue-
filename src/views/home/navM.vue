<template>
	<nav>
	  <ul>
	    <li><a href="">Example 1</a></li>
	    <li><a href="">Example 2</a></li>
	    <li><a href="">Example 3</a></li>
	    <li><a href="">Example 4</a></li>
	  </ul>
	</nav>
</template>

<script>
</script>

<style lang="scss" scoped>
	a {
	  color: #fff;
	  text-decoration: none;
	}
	nav {
	  background: #434343;
	  overflow: hidden;
	}
	nav li {
	  display: inline-block;
	  vertical-align: top;
	  position: relative;
	}
	nav li:after {
	  content: " ";
	  position: absolute;
	  right: 0;
	  top: 0;
	  bottom: 0;
	  width: 40px;
	  transform: rotate(45deg);
	  background: #252525;
	}
	nav a {
	  display: block;
	  padding: 14px 20px;
	  position: relative;
	  z-index: 1;
	}
	nav li a:before {
	  content: " ";
	  position: absolute;
	  right: 3px;
	  top: 0;
	  bottom: 0;
	  width: 40px;
	  transform: rotate(45deg);
	  background: #434343;
	  z-index: -1;
	}
</style>
