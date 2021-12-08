<template>
  <el-container>
    <el-header>
      M&oacute;dulo ajustes
      <el-button
        type="info"
        icon="el-icon-back"
        circle
        @click="logout"
        title="logout"
      ></el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-menu"></i>Men&uacute;</template
            >
            <el-submenu index="1-4">
              <template slot="title">Usuarios</template>
              <el-menu-item index="1-4-1">Mantenedor</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="demo-image__placeholder">
          <div class="block">
            <!-- <span class="demonstration">Default</span> -->
            <el-image :src="src" fit></el-image>
          </div>
          <!-- <div class="block">
            <span class="demonstration">Custom</span>
            <el-image :src="src">
              <div slot="placeholder" class="image-slot">
                Loading<span class="dot">...</span>
              </div>
            </el-image>
          </div> -->
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { getAuth, signOut } from "firebase/auth";
export default {
  data() {
    return {
      src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
    };
  },
  methods: {
    logout() {
      // this.$router.push("login");
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$router.push("login");
        })
        .catch((error) => {
          // An error happened.
          this.$message({
            showClose: true,
            message: error.message,
            type: "error",
          });
        });
    },
  },
};
</script>

<style></style>
