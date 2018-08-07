<template>
  <div>
    <header>
      <div class="title">
        <span class="name">医疗后台</span>
        <span class="hospital"> -- XXXXX社区医院</span>
      </div>
      <div class="box">
        <div class="message">
          <el-badge :is-dot="isDot" class="item">
            <i class="el-icon-bell"></i>
          </el-badge>
        </div>
        <div class="personInfo">
          <el-dropdown>
            <div class="el-dropdown-link">
              <div class="img">
                <img src="../../assets/images/face.png" alt="">
              </div>
              <div class="doctor">
                <span>彭医生-主治医师</span><br>
                <span>协和医院</span>
              </div>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      isDot: true
    };
  }
};
</script>
<style lang="less" scoped>
@blue: #409eff;
header {
  position: absolute;
  top: 0;
  left: 0;
  height: 70px;
  width: 100%;
  min-width: 1200px;
  background-color: @blue;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  box-sizing: border-box;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.5);
  z-index: 2;
  .title {
    line-height: 70px;
    .name {
      font-size: 22px;
      font-weight: 400;
      color: #fff;
    }
    .hospital {
      font-size: 18px;
      font-weight: 400;
      color: #fff;
    }
  }
  .box {
    display: flex;
    justify-content: flex-end;
    .message {
      padding: 0 30px;
      font-size: 20px;
      line-height: 35px;
      color: #fff;
      cursor: pointer;
      // 设置红点高度
      .el-badge {
        margin-top: 22px;
      }
    }
    .personInfo {
      cursor: pointer;
      .el-dropdown {
        margin-top: 14px;
        .el-dropdown-link {
          display: flex;
          justify-content: start-end;
          .img {
            width: 40px;
            height: 40px;
            border-radius: 20px;
            overflow: hidden;
            margin-right: 10px;
            img {
              width: 100%;
            }
          }
          .doctor {
            span {
              line-height: 20px;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
