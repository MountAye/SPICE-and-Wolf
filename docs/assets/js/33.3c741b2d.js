(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{447:function(t,i,a){"use strict";a.r(i);var r=a(43),_=Object(r.a)({},(function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"arch-linux-的启动流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arch-linux-的启动流程"}},[t._v("#")]),t._v(" Arch Linux 的启动流程")]),t._v(" "),a("h2",{attrs:{id:"linux-内核启动前"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-内核启动前"}},[t._v("#")]),t._v(" Linux 内核启动前")]),t._v(" "),a("h3",{attrs:{id:"bios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bios"}},[t._v("#")]),t._v(" BIOS")]),t._v(" "),a("ul",[a("li",[t._v("开机时加电自检。（这一步有时会简称为 POST）")]),t._v(" "),a("li",[t._v("BIOS 执行在「BIOS 硬盘顺序」中的第一块硬盘上的前 440 字节代码，即主引导记录。")]),t._v(" "),a("li",[t._v("主引导记录执行它之后的第二阶段代码，一般就是启动引导器。")])]),t._v(" "),a("h3",{attrs:{id:"uefi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uefi"}},[t._v("#")]),t._v(" UEFI")]),t._v(" "),a("ul",[a("li",[t._v("开机时加电自检。")]),t._v(" "),a("li",[t._v("UEFI 固件被加载，并由它初始化启动要用的硬件。")]),t._v(" "),a("li",[t._v("固件读取其引导管理器和 efivars 以确定从何处（比如，从哪个硬盘及分区）加载哪个 UEFI 应用。")]),t._v(" "),a("li",[t._v("固件按照引导管理器中的启动项目，加载UEFI 应用。（通常是启动加载器）")])]),t._v(" "),a("h3",{attrs:{id:"启动加载器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动加载器"}},[t._v("#")]),t._v(" 启动加载器")]),t._v(" "),a("p",[t._v("Bootloader 俗称“启动加载器”，是用来引导系统启动，加载内核之类的特殊软件。")]),t._v(" "),a("p",[t._v("GNU/Linux 下常用的启动引导器大概有这么几种：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("GRUB ，即 GRand Unified Bootloader。大家现在经常用到的其实是它的下一代（GRUB 2），是个功能丰富的启动加载器")]),t._v(" "),a("p",[t._v("（或者说是个 OS 也无妨）。")])]),t._v(" "),a("li",[a("p",[t._v("Systemd-boot ，前称 gummiboot。一个配置简单的启动加载器（虽然只支持 UEFI）")])]),t._v(" "),a("li",[a("p",[t._v("rEFInd，外观精美，自动配置简单。")])])]),t._v(" "),a("h3",{attrs:{id:"initramfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initramfs"}},[t._v("#")]),t._v(" initramfs")]),t._v(" "),a("p",[t._v("内核被加载后，它就会解压 mkinitcpio ， 又名 initial RAM filesystem, 后者会伪装成一个已初始化的根文件系统。内核接着会执行 /init 作为第一条进程。这就是所谓的「用户空间」啦~")]),t._v(" "),a("blockquote",[a("p",[t._v("初始内存盘本质上是一个很小的运行环境（早期用户空间），用于加载一些核心模块，并在 init 接管启动过程之前做必要的准备。有了这个环境，才能支持加密根文件系统、RAID上的根文件系统等高级功能。mkinicpio 支持自定义的钩子扩展、运行时自动检测以及其他功能。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Mkinitcpio_%28%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87%29",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.archlinux.org/index.php/Mkinitcpio_(简体中文)"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("initramfs 会加载启动时所需要的各种模块，并挂载好根文件系统。")]),t._v(" "),a("p",[t._v("在「早期用户空间」的最终环节里，真正的根文件系统被挂载好后，就会替换掉原来的伪根文件系统。接着 /sbin/init 被执行，同样也替换掉原来的 /init 进程。")]),t._v(" "),a("h3",{attrs:{id:"getty-或者显示管理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getty-或者显示管理器"}},[t._v("#")]),t._v(" Getty 或者显示管理器")]),t._v(" "),a("p",[t._v("init 为每一个 虚拟终端 调用 getty，前者一般有六个，每个虚拟终端都会初始化 tty 并请求输入用户名和密码。当在某虚拟终端输入用户名和密码后，其 getty 会通过 /etc/passwd 检查是否正确，如果正确，就接着调用 login。")]),t._v(" "),a("p",[t._v("如果有使用显示管理器的话，显示管理器, 会代替原来的 getty 登录命令行提示符展示登录画面。")])])}),[],!1,null,null,null);i.default=_.exports}}]);