<div class="main-sidebar sidebar-style-2">
    <aside id="sidebar-wrapper">
        <div class="sidebar-brand">
            <a href="index.html">Stisla</a>
        </div>
        <div class="sidebar-brand sidebar-brand-sm">
            <a href="index.html">St</a>
        </div>
        <ul class="sidebar-menu">

            <li class="menu-header">Dashboard</li>
            <li>
                <router-link class="nav-link" :to="{name : 'home'}">
                    <i class="fas fa-fire"></i>
                    <span>Dashboard</span>
                </router-link>
            </li>
            <li class="menu-header">Adminstrativo</li>
            <li>
                <router-link class="nav-link" :to="{name : 'profile'}">
                    <i class="fas fa-user"></i>
                    <span>Perfil</span>
                </router-link>
            </li>
            <li>
                <router-link class="nav-link" :to="{name : 'users'}">
                    <i class="fas fa-users-cog"></i>
                    <span>Usuários</span>
                </router-link>
            </li>

        </ul>


    </aside>
</div>
