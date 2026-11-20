---
title: "Beyond Monoscopic Viewing: A Study on 3D Gaussian Splatting Quality in VR"
collection: publications
category: preprints
authors: 'Shreyas Shivakumara, Gabriel Eilertsen, Karljohan Lundin Palmerius'
thumbnail: /images/papers/3dgs-vr.jpg
permalink: /publication/2026-09-29-3dgs-quality-in-vr
date: 2026-09-29
venue: 'arXiv preprint'
badge: 'Preprint'
paperurl: 'https://arxiv.org/pdf/2609.38525'
arxivurl: 'https://arxiv.org/abs/2609.38525'
citation: 'Shivakumara, S., Eilertsen, G., & Lundin Palmerius, K. (2026). &quot;Beyond Monoscopic Viewing: A Study on 3D Gaussian Splatting Quality in VR.&quot; <i>arXiv preprint</i> arXiv:2609.38525.'
---

Stereoscopy is fundamental to virtual reality (VR), providing depth perception through binocular viewing. Recent advances in 3D Gaussian Splatting (3DGS) enable high-quality novel view synthesis, making it well suited to immersive VR. We render 3DGS reconstructions stereoscopically and evaluate them in a head-mounted display, replicating how they would actually be viewed in VR. Real-world capture provides only a limited number of views, and under this constraint 3DGS reconstruction often produces localized floaters and misplaced structures. Standard metrics miss these localized artifacts, which become salient under stereoscopic viewing, where geometry is placed at the wrong depth.

We investigate whether standard image-quality evaluation reflects the perceptual quality of 3DGS reconstructions under reduced capture. We compare an SfM-only baseline with a union initialization that combines SfM with a dense VGGT network, holding all other training components fixed to isolate the effect of initialization coverage. A user study compares preferences under monoscopic and stereoscopic HMD viewing: monoscopically, preference for the more consistent reconstruction is weak (58.4%), while stereoscopically it rises to 78.2% and is consistent across all participants. Image-quality metrics (PSNR, SSIM, LPIPS) and stereo-aware metrics (iSQoE, StereoQA) show only modest agreement with these preferences.
