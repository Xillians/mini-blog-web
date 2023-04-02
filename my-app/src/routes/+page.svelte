<script>
	import { urlFor } from '../controller/sanity';
	export let data;
</script>

<div class="content">
	{#each data.posts as post}
		<div class="post">
			<img src={urlFor(post.image[0].asset._ref).width(300).url()} alt={post.image[0].caption} />
			<div>
				<b>{post.title}</b>
				<p>{post.description}</p>
				<p>Painted by <b>{post.painter.username}</b></p>
				<p>model by</p>
					<ul>
						{#each post.publishers as publisher}
						<li>{publisher}</li>
						{/each}
					</ul>
			</div>
		</div>
	{/each}
</div>

<style>
	.post {
		margin: 30px;
		display: flex;
	}
	img {
		margin-right: 20px;
	}
</style>
