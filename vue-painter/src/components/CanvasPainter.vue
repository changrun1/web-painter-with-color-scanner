<template>
  <div>
    <div class="tools">
      <input type="color" v-model="color" />
      <input type="range" v-model="lineWidth" min="1" max="50" />
      <button @click="clearCanvas">清除畫布</button>
      <button @click="fetchColorFromServer">同步顏色</button>
    </div>
    <div ref="container" class="container"></div>
  </div>
</template>

  
<script>
import Konva from 'konva';
import axios from 'axios';

export default {
  data() {
    return {
      stage: null,
      layer: null,
      isPainting: false,
      lastLine: null,
      color: '#df4b26',
      lineWidth: 5,
      canvasWidth: window.innerWidth,
      canvasHeight: window.innerHeight - 50
    };
  },

  async mounted() {
    await this.$nextTick();
    await this.fetchColorFromServer();
    this.canvasWidth = this.$refs.container.offsetWidth;
    this.canvasHeight = this.$refs.container.offsetHeight;
    this.initStage();
  },
  methods: {
    initStage() {
      this.stage = new Konva.Stage({
        container: this.$refs.container,
        width: this.canvasWidth,
        height: this.canvasHeight
      });

      this.layer = new Konva.Layer();
      this.stage.add(this.layer);

      this.stage.on('mousedown touchstart', this.startPaint);
      this.stage.on('mouseup touchend', this.endPaint);
      this.stage.on('mousemove touchmove', this.paint);
    },
    async fetchColorFromServer() {
      try {
        const response = await axios.get('http://123.194.35.219:8002/color');
        if (response.data && response.data.color) {
          this.color = response.data.color;
        } else {
          console.error('Unexpected response format from server.');
        }
      } catch (error) {
        console.error('Error fetching color from server:', error);
      }
    },
    startPaint() {
      this.isPainting = true;
      const pos = this.stage.getPointerPosition();
      this.lastLine = new Konva.Line({
        stroke: this.color,
        strokeWidth: this.lineWidth,
        globalCompositeOperation: 'source-over',
        points: [pos.x, pos.y]
      });
      this.layer.add(this.lastLine);
    }
    ,
    endPaint() {
      this.isPainting = false;
    },
    paint() {
      if (!this.isPainting) return;
      const pos = this.stage.getPointerPosition();
      const newPoints = this.lastLine.points().concat([pos.x, pos.y]);
      this.lastLine.points(newPoints);
      this.layer.batchDraw();
    },
    clearCanvas() {
      this.layer.removeChildren();
      this.layer.draw();
    }

  }
};
</script>
  
<style scoped>
.tools {
  display: flex;
  justify-content: center;
  gap: 10px;  /* 增加了元素間距 */
  padding: 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.tools button {
   padding: 0px 0px;/*  增加按鈕的內邊距 */
  min-width: 50px;  /* 為按鈕設定最小寬度 */
  white-space: nowrap;  /* 確保按鈕文本不會換行 */
}
.container {
  width: 100%;

  min-height: calc(100vh - 50px); 
}
</style>
  