<script lang="ts">
  import React from '$lib/assets/react.svg'
  import Node from '$lib/assets/node.svg'
  import Mongo from '$lib/assets/mongo.svg'
  import Kubernetes from '$lib/assets/kubernetes.svg'
  import Flutter from '$lib/assets/flutter.svg'
  import AWS from '$lib/assets/aws.svg'
  import GraphQL from '$lib/assets/graphql.svg'
  import Docker from '$lib/assets/docker.svg'
  import Svelte from '$lib/assets/svelte.svg'

  import type { SkillType } from './works'
  export let kind: SkillType
</script>

{#if kind == 'react'}
  <img src={React} alt="React" />
{/if}
{#if kind == 'node'}
  <img src={Node} alt="NodeJS" />
{/if}
{#if kind == 'mongo'}
  <img src={Mongo} alt="MongoDB" />
{/if}
{#if kind == 'kubernetes'}
  <img src={Kubernetes} alt="Kubernetes" />
{/if}
{#if kind == 'flutter'}
  <img src={Flutter} alt="Flutter" />
{/if}
{#if kind == 'aws'}
  <img src={AWS} alt="AWS" />
{/if}
{#if kind == 'graphql'}
  <img src={GraphQL} alt="GraphQL" />
{/if}
{#if kind == 'svelte'}
  <img src={Svelte} alt="Svelte" />
{/if}
{#if kind == 'docker'}
  <img src={Docker} alt="Docker" />
{/if}
