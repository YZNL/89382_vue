<!--  -->
<template>
  <div>
    <header-place title="订单提交"
                  class="head"></header-place>
    <div class="CHeckPlace">
      <span class="fo">公寓名：</span>
      <el-select v-model="value"
                 placeholder="请选择"
                 class="dorm_sel"
                 @change="valueTravel()">
        <el-option v-for="item in options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
        </el-option>
      </el-select>
      <span class="fo">公寓号：</span>
      <!--  -->
      <!--  -->
      <el-select v-model="Num_value"
                 placeholder="请选择"
                 class="dorm_sel">
        <el-option v-for="item in NUM_options"
                   :key="item.Num_value"
                   :label="item.label"
                   :value="item.Num_value">
        </el-option>
      </el-select>
    </div>
    <hr>
    <div class="reason">
      <p style="margin-left:10%"><span style="color:red;">*</span>故障原因：</p>
      <sea class="reason_sel"></sea>
    </div>
    <div class="reason">
      <p style="margin-left:10%"><span style="color:red;">*</span>宿舍号：</p>
      <div class="demo-input-size">
        <el-input class="InText"
                  v-model="input"
                  placeholder="请输入宿舍号"></el-input>
      </div>
    </div>
    <div class="details_place">
      <p style="margin-left:10%">详细原因：</p>
      <textarea class="details"></textarea>
      <!-- <div class="imgUP">
        <el-upload action="http://39.108.152.84:8080/repair_war/addImage"
                   list-type="picture-card"
                   :limit=3
                   :on-success="yes"
                   :on-preview="handlePictureCardPreview"
                   :on-remove="handleRemove">
          <i class="el-icon-plus imgup"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" id="Ipl" v-if="temp">
          <img width="100%"
               :src="dialogImageUrl"
               alt=""
               name="Im">
        </el-dialog>
      </div> -->
    </div>
    <el-row class="UPbutton">
      <el-button type="primary"
                 round
                 @click="sendMessage()">圆角按钮</el-button>
    </el-row>
    <div class="footer">
      <foot></foot>
    </div>
  </div>
</template>

<script>
import headerPlace from '../compents/header.vue'
import sea from '../compents/selea.vue'
import foot from '../compents/footer.vue'

export default {
  data() {
    return {
      count: 0,
      temp: true,
      title: 'welcome',
      dialogImageUrl: '',
      dialogVisible: false,
      options: [{
        value: 1,
        label: '长智公寓',
      },
      {
        value: 2,
        label: '长思公寓',
      },
      {
        value: 3,
        label: '安悦公寓',
      },
      {
        value: 4,
        label: '安美公寓',
      }
      ],
      NUM_options: [],
      value: '',
      Num_value: '',
      input: ''
    }
  },
  components: {
    headerPlace,
    sea,
    foot
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
      this.count++
      if (this.count === 3) {
        this.temp = false
      }
      console.log(this.count)
    },
    yes() {
      this.count++
      if (this.count === 3) {
        this.temp = false
      }
    },
    valueTravel() {
      var option = [
        [
          {
            Num_value: 1,
            label: '1'
          },
          {
            Num_value: 2,
            label: '2'
          },
          {
            Num_value: 3,
            label: '3'
          },
          {
            Num_value: 4,
            label: '4'
          },
          {
            Num_value: 5,
            label: '5'
          },
          {
            Num_value: 6,
            label: '6'
          },
          {
            Num_value: 7,
            label: '7'
          },
          {
            Num_value: 8,
            label: '8'
          },
          {
            Num_value: 9,
            label: '9'
          },
          {
            Num_value: 10,
            label: '10'
          },
          {
            Num_value: 11,
            label: '11'
          },
          {
            Num_value: 12,
            label: '12'
          },
          {
            Num_value: 13,
            label: '13'
          },
          {
            Num_value: 14,
            label: '14'
          },
          {
            Num_value: 15,
            label: '15'
          },
          {
            Num_value: 16,
            label: '16'
          },
          {
            Num_value: 17,
            label: '17'
          },
          {
            Num_value: 18,
            label: '18'
          }
        ],
        [
          {
            Num_value: 1,
            label: '1'
          },
          {
            Num_value: 2,
            label: '2'
          },
          {
            Num_value: 3,
            label: '3'
          },
          {
            Num_value: 4,
            label: '4'
          },
          {
            Num_value: 5,
            label: '5'
          },
          {
            Num_value: 6,
            label: '6'
          },
          {
            Num_value: 7,
            label: '7'
          },
          {
            Num_value: 8,
            label: '8'
          },
          {
            Num_value: 9,
            label: '9'
          },
          {
            Num_value: 10,
            label: '10'
          },
          {
            Num_value: 11,
            label: '11'
          },
          {
            Num_value: 12,
            label: '12'
          },
          {
            Num_value: 13,
            label: '13'
          },
          {
            Num_value: 14,
            label: '14'
          },
          {
            Num_value: 15,
            label: '15'
          },
          {
            Num_value: 16,
            label: '16'
          },
          {
            Num_value: 17,
            label: '17'
          },
          {
            Num_value: 18,
            label: '18'
          }
        ],
        [
          {
            Num_value: 1,
            label: '南楼'
          },
          {
            Num_value: 2,
            label: '北楼'
          }
        ],
        [
          {
            Num_value: 1,
            label: '南楼'
          },
          {
            Num_value: 2,
            label: '北楼'
          }
        ]
      ]
      this.NUM_options = option[this.value - 1]
      console.log(this.NUM_options)
    },
    sendMessage() {
      let that = this;
      var parm = new URLSearchParams();
      parm.append("flat", 'Fred');
      parm.append("house", Number(123));
      parm.append("num", '301');
      // parm.append("phone", 12345678);
      parm.append("condition", "电灯损坏");
      parm.append("remarks", "无");
      console.log('111', JSON.stringify(parm))
      // parm = JSON.stringify()
      // parm = JSON.parse()
      that.$http.post('http://39.108.152.84:8080/repair_war/report', parm).then((res) => {
        console.log(1)
        console.log(res.msg)
      }).catch((error) => {
        console.log('123', error)
      })
    }
  },
  watch: {
  },
  mounted: function () {
  },
  computed: {
  }
}
</script>
<style lang="stylus">
.fo {
  font-size: 0.8em;
  padding-left: 0.5em;
}

.head {
  width: 100em;
  position: relative;
}

.dorm_sel {
  padding-left: 0.2em;
  width: 28%;
}

.CHeckPlace {
  position: relative;
  margin-top: 0.5em;
  padding-left: 0.1em;
}

.reason {
  width: 100%;
}

.reason_sel {
  width: 90%;
  margin-left: 5%;
}

.demo-input-size {
  width: 90%;
  margin-left: 5%;
}

.details_place {
  position: relative;
  margin-top: 1em;
  height: 10em;
}

.details {
  height: 5em;
  width: 90%;
  margin-left: 5%;
  border: 0.5px solid #DCDFE6;
  padding: 0.1em;
  border-radius: 3%;
  border-bottom: none;
}

.el-upload-list--picture-card .el-upload-list__item {
  height: 100px !important;
  width: 100px !important;
  // margin-left: 1em;
}

.el-upload--picture-card {
  height: 100px !important;
  width: 100px !important;
  line-height: 100px !important;
  // margin-left: 0.5em;
}

.el-upload-list--picture-card .el-upload-list__item-actions {
  margin-left: 0.5em !important;
}

.imgUP {
  position: relative;
  margin-top: -1em;
  width: 87%;
  margin-left: 4.8%;
  background-color: rgb(240, 240, 240);
  padding-left: 4%;
  padding-top: 0.2em;
  height: 110px;
  overflow: hidden;
}

.UPbutton {
  width: 30%;
  margin-left: 35%;
  margin-top: 0.5em;
}

.footer {
  position: fixed;
  margin-top: 3em;
  width: 100%;
  background-color: rgb(240, 240, 240);
  margin-left: 0.8em;
}
</style>
