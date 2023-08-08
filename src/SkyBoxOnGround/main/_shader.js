//片元着色器，直接从源码复制
let SkyBoxFS = `uniform samplerCube u_cubeMap;
  in vec3 v_texCoord;
  void main()
  {
    vec4 color = texture(u_cubeMap, normalize(v_texCoord));
    out_FragColor = vec4(czm_gammaCorrect(color).rgb, czm_morphTime);
  }
`;

//顶点着色器有修改，主要是乘了一个旋转矩阵
let SkyBoxVS = `
  uniform mat3 u_rotateMatrix;
  in vec3 position;
  out vec3 v_texCoord;
  void main()
  {
    vec3 p = czm_viewRotation * u_rotateMatrix * (czm_temeToPseudoFixed * (czm_entireFrustum.y * position));
    gl_Position = czm_projection * vec4(p, 1.0);
    v_texCoord = position.xyz;
  }
 `;

export { SkyBoxFS, SkyBoxVS };
