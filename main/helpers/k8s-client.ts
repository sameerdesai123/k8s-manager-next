import { KubeConfig, KubernetesObjectApi, CoreV1Api } from '@kubernetes/client-node';

const kubeConfig = new KubeConfig();
kubeConfig.loadFromDefault();

const kubeApi = kubeConfig.makeApiClient(CoreV1Api);

export {
    kubeConfig,
    kubeApi,
    CoreV1Api,
}