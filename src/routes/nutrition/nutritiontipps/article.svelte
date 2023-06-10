<script lang="ts">
import type { article } from "../nutritionTypes";

    export let data:article;

</script>

<main class="article">
    <div class="article">
        <img src={data.imagePath} alt={data.title} >
        <div class="textContent">
            <h3>{data.title}</h3>
            <p>{data.Text}</p>
            <a href={data.link} target="_blank">Weiterlesen...</a>

        </div>
    </div>

</main>

<style lang="css">
    .article{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 400px;
        justify-content: start;
        align-items: center;
    }
    .textContent{
        display: flex;
        flex-direction: column;
        padding-left: 3%;
        width: calc(90vw - 550px);

    }
    img{
        width: 500px;
        height: 300px;
    }
    .text{
        
        
    }

</style>