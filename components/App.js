export default ({ children }) => (
  <div className="app-container">
    {children}
    <style jsx>{`
      .app-container {
        min-height: 17.75rem;
        position: relative;
        font-size: 12px;
        padding-top: 4.6875rem;
        background: no-repeat center top/10rem url('//7tsyut.com1.z0.glb.clouddn.com/221499788440_.pic_hd.jpg');
      }
    `}</style>
    <style jsx global>{`
      * {
        font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
      }
      html {
        height: 100vh;
      }

      body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        background-color: #c13736;
      }

      * {
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
      }

      *:before, *:after {
        -webkit-box-sizing: inherit;
                box-sizing: inherit;
      }

      .icon, .iconfont {
        font-size: inherit !important;
      }

      [data-dpr="2"] .app-container {
        font-size: 24px;
      }
      [data-dpr="3"] .app-container {
        font-size: 36px;
      }

      .col {
        text-align: center;
        float: left;
        position: relative;
        min-height: 1px;
      }

      .clear-fix, .clear-fix::after {
        clear: both;
      }
      .clear-fix::after, .clear-fix::before {
        display: table;
        content: " ";
      }

      .bg-primary {
        background-color: #f2514a;
        color: #fff;
      }

      .bg-primary-transparent {
        background-color: #fff;
        color: #f2514a;
        border: 1px solid #f2514a;
      }

      .bg-blue {
        background-color: #4493f4;
        color: #fff;
      }

      .p-t-20 {
        padding-top: 0.3125rem;
      }

      .form_field {
        margin: 0 -0.1563rem;
      }

      .form--inline {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }

      .form_control {
        -webkit-box-flex: 0;
            -ms-flex: 0 1 auto;
                flex: 0 1 auto;
      }

      @-webkit-keyframes spin {
        from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }
        to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
      }
      @keyframes spin {
        from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }
        to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
      }
    `}</style>
  </div>
)
