function showSidebar() {
  if(document.getElementById("sidebar").style.display == "block")
  {
    document.getElementById("sidebar").style.display = 'none';
    document.getElementById("btn_show").innerHTML = "显示目录";
    document.getElementById("div_hideSidebar").style.zIndex = -10;
  }
  else
  {
    document.getElementById("sidebar").style.display = 'block';
    document.getElementById("btn_show").innerHTML = "隐藏目录";
    document.getElementById("div_hideSidebar").style.zIndex = 10;
  }
  }

function hideSidebar() {
  if(document.getElementById("sidebar").style.display == "block")
  {
    document.getElementById("sidebar").style.display = 'none';
    document.getElementById("btn_show").innerHTML = "显示目录";
    document.getElementById("div_hideSidebar").style.zIndex = -10;
  }
}

$(function () {

  $('#jsMenu').jstree({
    "core": {
      "data": menuItems,
      "multiple": false, // no multiselection
      "themes": {
        "icons": false,
        "dots": false,
      }
    },
    "plugins": ["state", "search"]
  })

  //tree change时事件
  $('#jsMenu').on("changed.jstree", function (e, data) {
    console.log("The selected nodes are:");
    console.log(data.node.id);              //选择的node id      
    top.frames['content'].location.href = data.node.data;
  });

  var to = false;
  $('#searchMenu').keyup(function () {
    if (to) {
      clearTimeout(to);
    }
    to = setTimeout(function () {
      $('#jsMenu').jstree(true).search($('#searchMenu').val());
    }, 250);
  });

});

var menuItems =[
  {"id": "1000", "data": "help/CN/html/1000.html", "text": "Cinema 4D 程序文档", "state": {"opened": true}, "children": [
    {"id": "1014", "data": "help/CN/html/1014.html", "text": "Cinema 4D Studio"},
    {"id": "1001", "data": "help/CN/html/1001.html", "text": "Cinema 4D 基础", "state": {"opened": true}, "children": [
      {"id": "5425", "data": "help/CN/html/5425.html", "text": "概述"},
      {"id": "5426", "data": "help/CN/html/5426.html", "text": "视图和视窗", "children": [
        {"id": "5852", "data": "help/CN/html/5852.html", "text": "查看", "children": [
          {"id": "3065", "data": "help/CN/html/DBASEDRAW.html", "text": "视窗", "children": [
            {"id": "3066", "data": "help/CN/html/DBASEDRAW-BASEDRAW_GROUP_DISPLAY.html", "text": "视窗：显示"},
            {"id": "3069", "data": "help/CN/html/DBASEDRAW-BASEDRAW_GROUP_FILTER.html", "text": "视窗：过滤"},
            {"id": "3070", "data": "help/CN/html/DBASEDRAW-BASEDRAW_GROUP_VIEW.html", "text": "视窗：视图"},
            {"id": "3071", "data": "help/CN/html/DBASEDRAW-BASEDRAW_GROUP_BACKGROUND.html", "text": "视窗：背景"},
            {"id": "3072", "data": "help/CN/html/DBASEDRAW-BASEDRAW_GROUP_HUD.html", "text": "视窗：HUD"},
            {"id": "44659", "data": "help/CN/html/DBASEDRAW-BASEDRAW_GROUP_STEREO.html", "text": "视窗：立体"},
            {"id": "55309", "data": "help/CN/html/DBASEDRAW-BASEDRAW_GROUP_EFFECTS.html", "text": "视窗：增强OpenGL"},
          ]},
        ]},
        {"id": "5858", "data": "help/CN/html/5858.html", "text": "摄像机"},
        {"id": "5860", "data": "help/CN/html/5860.html", "text": "显示"},
        {"id": "45030", "data": "help/CN/html/45030.html", "text": "选项"},
        {"id": "11082", "data": "help/CN/html/11082.html", "text": "过滤"},
        {"id": "5861", "data": "help/CN/html/5861.html", "text": "面板"},
        {"id": "5593", "data": "help/CN/html/5593.html", "text": "HUD"},
      ]},
      {"id": "5215", "data": "help/CN/html/5215.html", "text": "配置", "children": [
        {"id": "5220", "data": "help/CN/html/5220.html", "text": "图形用户界面", "children": [
          {"id": "5221", "data": "help/CN/html/5221.html", "text": "窗口"},
          {"id": "5222", "data": "help/CN/html/5222.html", "text": "标签"},
          {"id": "5223", "data": "help/CN/html/5223.html", "text": "图标面板"},
          {"id": "5224", "data": "help/CN/html/5224.html", "text": "自定义命令管理器"},
          {"id": "5225", "data": "help/CN/html/5225.html", "text": "自定义菜单管理器"},
        ]},
        {"id": "40596", "data": "help/CN/html/DDOC.html", "text": "CINEMA 4D 工程设置"},
        {"id": "5244", "data": "help/CN/html/5244.html", "text": "设置"},
        {"id": "32034", "data": "help/CN/html/32034.html", "text": "管理员信息"},
      ]},
      {"id": "5177", "data": "help/CN/html/5177.html", "text": "创建菜单", "children": [
        {"id": "3909", "data": "help/CN/html/OLIGHT.html", "text": "灯光", "children": [
          {"id": "3910", "data": "help/CN/html/OLIGHT-OBASELIST.html", "text": "灯光：基本"},
          {"id": "3911", "data": "help/CN/html/OLIGHT-ID_BASEOBJECT_GROUP1.html", "text": "灯光：坐标"},
          {"id": "3913", "data": "help/CN/html/OLIGHT-LIGHT_GROUP_GENERAL.html", "text": "灯光：常规"},
          {"id": "3914", "data": "help/CN/html/OLIGHT-LIGHT_GROUP_DETAILS.html", "text": "灯光：细节"},
          {"id": "3915", "data": "help/CN/html/OLIGHT-LIGHT_GROUP_VISIBILITY.html", "text": "灯光：可见"},
          {"id": "3916", "data": "help/CN/html/OLIGHT-LIGHT_GROUP_SHADOW.html", "text": "灯光：投影"},
          {"id": "3917", "data": "help/CN/html/OLIGHT-LIGHT_GROUP_CAUSTICS.html", "text": "灯光：焦散"},
          {"id": "43080", "data": "help/CN/html/OLIGHT-LIGHT_GROUP_PHOTOMETRIC.html", "text": "灯光：光度"},
          {"id": "3918", "data": "help/CN/html/OLIGHT-LIGHT_GROUP_NOISE.html", "text": "灯光：噪波"},
          {"id": "3919", "data": "help/CN/html/OLIGHT-LIGHT_GROUP_LENSEFFECTS.html", "text": "灯光：镜头光晕"},
          {"id": "3920", "data": "help/CN/html/OLIGHT-LIGHT_GROUP_EXCLUSION.html", "text": "灯光：工程"},
        ]},
      ]},
      {"id": "5697", "data": "help/CN/html/5697.html", "text": "渲染菜单", "children": [
        {"id": "5698", "data": "help/CN/html/5698.html", "text": "渲染活动视图"},
        {"id": "5700", "data": "help/CN/html/5700.html", "text": "区域渲染"},
        {"id": "5699", "data": "help/CN/html/5699.html", "text": "渲染激活对象"},
        {"id": "5701", "data": "help/CN/html/5701.html", "text": "渲染到图片查看器"},
        {"id": "52710", "data": "help/CN/html/52710.html", "text": "Team Render 到图片查看器"},
        {"id": "5726", "data": "help/CN/html/5726.html", "text": "创建动画预览"},
        {"id": "43083", "data": "help/CN/html/43083.html", "text": "添加到渲染队列"},
        {"id": "43084", "data": "help/CN/html/43084.html", "text": "渲染队列"},
        {"id": "10974", "data": "help/CN/html/OSNIPER.html", "text": "交互式区域渲染(IRR)"},
        {"id": "32048", "data": "help/CN/html/DRENDERSETTINGS.html", "text": "编辑渲染设置", "children": [
          {"id": "32049", "data": "help/CN/html/DRENDERSETTINGS-OBASELIST.html", "text": "编辑渲染设置：基本特性"},
          {"id": "32051", "data": "help/CN/html/DRENDERSETTINGS-RDATA_GROUP_OUTPUT.html", "text": "编辑渲染设置：输出"},
          {"id": "49620", "data": "help/CN/html/DRENDERSETTINGS-RDATA_GROUP_SAVE.html", "text": "编辑渲染设置：保存", "children": [
            {"id": "54506", "data": "help/CN/html/54506.html", "text": "可变路径和文件名（“标记”）"},
          ]},
          {"id": "32053", "data": "help/CN/html/DRENDERSETTINGS-RDATA_GROUP_ANTIALIASING.html", "text": "编辑渲染设置：抗锯齿"},
          {"id": "32054", "data": "help/CN/html/DRENDERSETTINGS-RDATA_GROUP_OPTIONS.html", "text": "编辑渲染设置：选项"},
          {"id": "54551", "data": "help/CN/html/DRENDERSETTINGS-RDATA_GROUP_OVERRIDEMAT.html", "text": "编辑渲染设置：材质覆写"},
          {"id": "32055", "data": "help/CN/html/DRENDERSETTINGS-RDATA_GROUP_MULTIPASS.html", "text": "编辑渲染设置：多通道", "children": [
            {"id": "52789", "data": "help/CN/html/ZMULTIPASS.html", "text": "多通道", "children": [
              {"id": "52790", "data": "help/CN/html/ZMULTIPASS-MULTIPASSOBJECT_REFLECTIONDATA.html", "text": "多通道：反射"},
              {"id": "52791", "data":  "help/CN/html/ZMULTIPASS-MULTIPASSOBJECT_SPECULARDATA.html", "text": "多通道：高光"},
            ]},
          ]},
          {"id": "44660", "data": "help/CN/html/DRENDERSETTINGS-RDATA_GROUP_STEREO.html", "text": "编辑渲染设置：立体"},
          {"id": "55075", "data": "help/CN/html/VPPREVIEWSOFTWARE.html", "text": "软件预览", "children": [
            {"id": "55076", "data": "help/CN/html/VPPREVIEWSOFTWARE-ID_VIDEOPOSTPROPERTIES.html", "text": "软件预览：基本属性"},
          ]},
          {"id": "32036", "data": "help/CN/html/VPPREVIEWHARDWARE.html", "text": "硬件预览", "children": [
            {"id": "32037", "data": "help/CN/html/VPPREVIEWHARDWARE-ID_VIDEOPOSTPROPERTIES.html", "text": "硬件预览：基本属性"},
          ]},
          {"id": "5714", "data": "help/CN/html/5714.html", "text": "效果", "children": [
            {"id": "5727", "data": "help/CN/html/5727.html", "text": "镜头效果"},
            {"id": "5729", "data": "help/CN/html/5729.html", "text": "对象辉光"},
            {"id": "5734", "data": "help/CN/html/5734.html", "text": "滤镜", "children": [
              {"id": "4708", "data": "help/CN/html/VPMEDIANFILTER.html", "text": "中值滤镜", "children": [
                {"id": "4709", "data": "help/CN/html/VPMEDIANFILTER-ID_VIDEOPOSTPROPERTIES.html", "text": "中值滤镜：基本属性"},
              ]},
              {"id": "4716", "data": "help/CN/html/VPSHARPENFILTER.html", "text": "锐化滤镜", "children": [
                {"id": "4717", "data": "help/CN/html/VPSHARPENFILTER-ID_VIDEOPOSTPROPERTIES.html", "text": "锐化滤镜：基本属性"},
              ]},
              {"id": "4718", "data": "help/CN/html/VPSOFTFILTER.html", "text": "柔和滤镜", "children": [
                {"id": "4719", "data": "help/CN/html/VPSOFTFILTER-ID_VIDEOPOSTPROPERTIES.html", "text": "柔和滤镜：基本属性"},
              ]},  
            ]},
            {"id": "44496", "data": "help/CN/html/VPWATERMARK.html", "text": "渲染后期效果", "children": [
              {"id": "44497", "data": "help/CN/html/VPWATERMARK-ID_VIDEOPOSTPROPERTIES.html", "text": "渲染后期效果：基本属性"},
            ]},
            {"id": "32082", "data": "help/CN/html/VPAMBIENTOCCLUSION.html", "text": "环境吸收", "children": [
              {"id": "32083", "data": "help/CN/html/VPAMBIENTOCCLUSION-ID_VIDEOPOSTPROPERTIES.html", "text": "环境吸收：基本属性"},
              {"id": "52271", "data": "help/CN/html/VPAMBIENTOCCLUSION-VPAMBIENTOCCLUSION_GROUP_CACHE.html", "text": "环境吸收：缓存"},
            ]},
            {"id": "4706", "data": "help/CN/html/VPCOMIC.html", "text": "线描渲染器", "children": [
              {"id": "4707", "data": "help/CN/html/VPCOMIC-ID_VIDEOPOSTPROPERTIES.html", "text": "线描渲染器：基本属性"},
            ]},
            {"id": "4712", "data": "help/CN/html/VPREMOTE.html", "text": "外部效果", "children": [
              {"id": "4713", "data": "help/CN/html/VPREMOTE-ID_VIDEOPOSTPROPERTIES.html", "text": "外部效果：基本属性"},
            ]},
            {"id": "41405", "data": "help/CN/html/PVFILTER.html", "text": "色彩校正", "children": [
              {"id": "41406", "data": "help/CN/html/PVFILTER-ID_PV_PROPERTIES.html", "text": "色彩校正：色彩校正"},
            ]},
            {"id": "4714", "data": "help/CN/html/VPSCENEMOTIONBLUR.html", "text": "次帧运动模糊", "children": [
              {"id": "4715", "data": "help/CN/html/VPSCENEMOTIONBLUR-ID_VIDEOPOSTPROPERTIES.html", "text": "次帧运动模糊：基本属性"},
            ]},
            {"id": "32225", "data": "help/CN/html/VPCYLINDERLENS.html", "text": "柱面镜头", "children": [
              {"id": "32226", "data": "help/CN/html/VPCYLINDERLENS-ID_VIDEOPOSTPROPERTIES.html", "text": "柱面镜头：基本属性"},
            ]},
            {"id": "49697", "data": "help/CN/html/VPPOSITIONPASS.html", "text": "方位通道", "children": [
              {"id": "49698", "data": "help/CN/html/VPPOSITIONPASS-ID_VIDEOPOSTPROPERTIES.html", "text": "方位通道：基本属性"},
            ]},
            {"id": "52221", "data": "help/CN/html/VPNORMALPASS.html", "text": "法线通道", "children": [
              {"id": "52222", "data": "help/CN/html/VPNORMALPASS-ID_VIDEOPOSTPROPERTIES.html", "text": "法线通道：基本属性"},
            ]},
            {"id": "54549", "data": "help/CN/html/VPPHLENSDISTORT.html", "text": "镜头失真", "children": [
              {"id": "54550", "data": "help/CN/html/VPPHLENSDISTORT-ID_VIDEOPOSTPROPERTIES.html", "text": "镜头失真：基本属性"},
            ]},
          ]},
          {"id": "32219", "data": "help/CN/html/32219.html", "text": "全局光照", "children": [
            {"id": "32222", "data": "help/CN/html/32222.html", "text": "第一步"},
            {"id": "32220", "data": "help/CN/html/32220.html", "text": "建议与技巧"},
            {"id": "32221", "data": "help/CN/html/32221.html", "text": "GI 入口和多边形灯光：功能与布置"},
            {"id": "52453", "data": "help/CN/html/52453.html", "text": "渲染示例"},
            {"id": "32075", "data": "help/CN/html/VPGISETUP.html", "text": "全局光照设置", "children": [
              {"id": "32076", "data": "help/CN/html/VPGISETUP-GI_GROUP_GENERAL.html", "text": "全局光照设置：常规"},
              {"id": "52457", "data": "help/CN/html/VPGISETUP-GI_GROUP_IC2.html", "text": "全局光照设置：辐照缓存"},
              {"id": "52460", "data": "help/CN/html/VPGISETUP-GI_GROUP_OPTIONS.html", "text": "全局光照设置：选项"},
            ]},
          ]},
        ]},
        {"id": "5706", "data": "help/CN/html/5706.html", "text": "清空光照缓存"},
        {"id": "53798", "data": "help/CN/html/53798.html", "text": "在网络中共享机器"},
      ]},
      {"id": "5741", "data": "help/CN/html/xxx5741.html", "text": "帮助菜单"},
      {"id": "5743", "data": "help/CN/html/xxx5743.html", "text": "对象管理器（施工中）", "children": [
        {"id": "5744", "data": "help/CN/html/xxx5744.html", "text": "文件菜单", "children": [
          {"id": "5771", "data": "help/CN/html/xxx5771.html", "text": "合并对象…"},
          {"id": "5772", "data": "help/CN/html/xxx5772.html", "text": "保存所选对象为…"},
          {"id": "5775", "data": "help/CN/html/xxx5775.html", "text": "加载/保存对象预置"},
          {"id": "5776", "data": "help/CN/html/xxx5776.html", "text": "加载/保存预置标签"},
        ]},
        {"id": "5745", "data": "help/CN/html/xxx5745.html", "text": "编辑菜单"},
        {"id": "11059", "data": "help/CN/html/xxx11059.html", "text": "查看", "children": [
          {"id": "11061", "data": "help/CN/html/xxx11061.html", "text": "图标尺寸"},
          {"id": "11062", "data": "help/CN/html/xxx11062.html", "text": "折叠"},
          {"id": "11063", "data": "help/CN/html/xxx11063.html", "text": "设为根部"},
          {"id": "11064", "data": "help/CN/html/xxx11064.html", "text": "转到主层"},
          {"id": "11065", "data": "help/CN/html/xxx11065.html", "text": "向上一级"},
          {"id": "11066", "data": "help/CN/html/xxx11066.html", "text": "转到第一激活对象"},
          {"id": "11067", "data": "help/CN/html/xxx11067.html", "text": "显示搜索条"},
          {"id": "11068", "data": "help/CN/html/xxx11068.html", "text": "显示路径条"},
          {"id": "11069", "data": "help/CN/html/xxx11069.html", "text": "使用过滤"},
          {"id": "11070", "data": "help/CN/html/xxx11070.html", "text": "平面目录树"},
          {"id": "11071", "data": "help/CN/html/xxx11071.html", "text": "竖向标签"},
          {"id": "11072", "data": "help/CN/html/xxx11072.html", "text": "按名称排列"},
        ]},
        {"id": "5746", "data": "help/CN/html/xxx5746.html", "text": "对象菜单", "children": [
          {"id": "5369", "data": "help/CN/html/xxx5369.html", "text": "烘焙纹理", "children": [
            {"id": "5370", "data": "help/CN/html/xxx5370.html", "text": "烘焙纹理：基本"},
            {"id": "5371", "data": "help/CN/html/xxx5371.html", "text": "烘焙纹理：标签属性"},
            {"id": "5372", "data": "help/CN/html/xxx5372.html", "text": "烘焙纹理：选项"},
            {"id": "5373", "data": "help/CN/html/xxx5373.html", "text": "烘焙纹理：细节"},
          ]},
          {"id": "5739", "data": "help/CN/html/xxx5739.html", "text": "烘焙对象"},
        ]},
        {"id": "11057", "data": "help/CN/html/xxx11057.html", "text": "标签菜单", "children": [
          {"id": "5749", "data": "help/CN/html/xxx5749.html", "text": "CINEMA 4D 标签"},
          {"id": "5747", "data": "help/CN/html/xxx5747.html", "text": "标签菜单"},
          {"id": "5748", "data": "help/CN/html/xxx5748.html", "text": "纹理标签菜单"},
        ]},
        {"id": "11060", "data": "help/CN/html/xxx11060.html", "text": "书签"},
      ]},
      {"id": "5808", "data": "help/CN/html/5808.html", "text": "材质管理器", "children": [
        {"id": "5809", "data": "help/CN/html/5809.html", "text": "创建菜单"},
        {"id": "5810", "data": "help/CN/html/5810.html", "text": "编辑菜单"},
        {"id": "5811", "data": "help/CN/html/5811.html", "text": "功能菜单"},
        {"id": "3504", "data": "help/CN/html/MMATERIAL.html", "text": "材质属性 / 材质编辑器", "children": [
          {"id": "5863", "data": "help/CN/html/5863.html", "text": "材质预览"},
          {"id": "6291", "data": "help/CN/html/6291.html", "text": "纹理设置", "children": [
            {"id": "52276", "data": "help/CN/html/52276.html", "text": "贴图管理器"},
          ]},
          {"id": "11167", "data": "help/CN/html/11167.html", "text": "材质与 XPresso"},
          {"id": "3506", "data": "help/CN/html/MMATERIAL-OBASELIST.html", "text": "材质属性 / 材质编辑器：基本属性"},
          {"id": "3509", "data": "help/CN/html/MMATERIAL-ID_MATERIALGROUP_COLOR.html", "text": "材质属性 / 材质编辑器：颜色"},
          {"id": "3510", "data": "help/CN/html/MMATERIAL-ID_MATERIALGROUP_DIFFUSION.html", "text": "材质属性 / 材质编辑器：漫射"},
          {"id": "3511", "data": "help/CN/html/MMATERIAL-ID_MATERIALGROUP_LUMINANCE.html", "text": "材质属性 / 材质编辑器：发光"},
          {"id": "3512", "data": "help/CN/html/MMATERIAL-ID_MATERIALGROUP_TRANSPARENCY.html", "text": "材质属性 / 材质编辑器：透明"},
          {"id": "3513", "data": "help/CN/html/MMATERIAL-ID_MATERIALGROUP_REFLECTION.html", "text": "材质属性 / 材质编辑器：反射"},
          {"id": "3514", "data": "help/CN/html/MMATERIAL-ID_MATERIALGROUP_ENVIRONMENT.html", "text": "材质属性 / 材质编辑器：环境"},
          {"id": "3515", "data": "help/CN/html/MMATERIAL-ID_MATERIALGROUP_FOG.html", "text": "材质属性 / 材质编辑器：烟雾"},
          {"id": "3516", "data": "help/CN/html/MMATERIAL-ID_MATERIALGROUP_BUMP.html", "text": "材质属性 / 材质编辑器：凹凸"},
          {"id": "5313", "data": "help/CN/html/MMATERIAL-ID_MATERIALGROUP_NORMAL.html", "text": "材质属性 / 材质编辑器：法线"},
          {"id": "5317", "data": "help/CN/html/MMATERIAL-ID_MATERIALGROUP_ALPHA.html", "text": "材质属性 / 材质编辑器：Alpha"},
          {"id": "5320", "data": "help/CN/html/MMATERIAL-ID_MATERIALGROUP_GLOW.html", "text": "材质属性 / 材质编辑器：辉光"},
          {"id": "5321", "data": "help/CN/html/MMATERIAL-ID_MATERIALGROUP_DISPLACEMENT.html", "text": "材质属性 / 材质编辑器：置换"},
          {"id": "32165", "data": "help/CN/html/MMATERIAL-ID_MATERIALGROUP_EDITOR.html", "text": "材质属性 / 材质编辑器：编辑"},
          {"id": "3523", "data": "help/CN/html/MMATERIAL-ID_MATERIALGROUP_ILLUMINATION.html", "text": "材质属性 / 材质编辑器：光照"},
          {"id": "6145", "data": "help/CN/html/MMATERIAL-ID_MATERIALASSIGNMENTS_GROUP.html", "text": "材质属性 / 材质编辑器：指定"},
        ]},
      ]},
    ]},
    {"id":"1002", "data": "help/CN/html/tut/__tut_1002.html", "text": "Cinema 4D 教程", "children": [
      {"id": "40480",  "data": "help/CN/html/tut/__tut_40480.html", "text": "机械建模教程", "children": [
        {"id": "40453", "data": "help/CN/html/tut/__tut_40453.html", "text": "使用布尔和实例对象", "children": [
          {"id": "40440", "data": "help/CN/html/tut/__tut_40440.html", "text": "铅笔建模"},
        ]}
      ]},
    ]}
  ]}
]

//获取 iframe 地址
var iframeWindow = document.getElementById('content').contentWindow;
var currentHref = iframeWindow.document.location.href;