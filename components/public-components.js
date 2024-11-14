// 定义菜单组件
const MenuComponent = {
  name: "MenuComponent",
  setup() {
    // 获取当前路径
    const currentPath = window.location.pathname;

    // 判断当前路径是否与菜单项路径匹配
    const isActive = (path) => {
      console.log(path);
      console.log(currentPath);
      return currentPath === path + ".html";
    };

    return {
      isActive,
    };
  },
  template: `
      <nav>
        <ul>
          <li :class="{ active: isActive('/index') }"><a href="../index.html">Home</a></li>
          <li :class="{ active: isActive('/about') }"><a href="../about.html">About</a></li>
          <li :class="{ active: isActive('/contact') }"><a href="../contact.html">Contact</a></li>
        </ul>
      </nav>
    `,
};

// 全局注册菜单组件
window.MenuComponent = MenuComponent;
