<template>
  <div class="game">
    <div class="content">
      <div class="team">
        <div>
          <img src="./skt.png" alt="">
          <span>SKTelecom T1</span>
        </div>
      </div>
      <div class="match-info">
        <p class="game-type">职业联赛</p>
        <p class="score">0:0</p>
        <p class="state end">已结束</p>
        <p class="begin-time">20日 20：00</p>
      </div>
      <div class="team">
        <div>
          <img src="./skt.png" alt="">
          <span>SKTelecom T1</span>
        </div>
      </div>
    </div>
    <div class="ctrl">
      <div>点赞</div>
      <div>比赛详情</div>
      <div>评论</div>
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $mc:#ddab3e;
  .game{
    display:flex;
    flex-direction:column;
    height: 6rem;
    background-color: #000;
    margin-bottom: 0.1rem;
    .content{
      flex:1;
      display:flex;
      .team{
        flex:4;
        display:flex;
        align-items: center;
        div{
          img{
            height: 2.5rem;
            vertical-align: middle;
          }
          span{
            color:#fff;
            font-size:0.5rem;
            line-height: 0.5rem;
            vertical-align: middle;
          }
        }
      }
      .match-info{
        flex:3;
        .game-type{
          font-size:0.5rem;
          font-weight: 600;
          color:$mc;
        }
        .score{
          color:#fff;
          font-size:2rem;
          font-weight: 600;  
        }
        .state{
          font-size:0.5rem;
        }
        .state.coming{
          color:#a3a3a3;
        }
        .state.playing{
          color:#2be400;
        }
        .state.end{
          color:#fff;
        }
        .begin-time{
          color:#fff;
          font-size:0.6rem;
          font-weight: 600;   
        }
      }
    }
    .ctrl{
      border-top: 0.01rem solid $mc;
      height: 1rem;
      display:flex;
      line-height: 1rem;
      div{
        flex:1;
        font-size:0.4rem;
        font-weight: 600;
        color:$mc;
      }
    }
  }
</style>
