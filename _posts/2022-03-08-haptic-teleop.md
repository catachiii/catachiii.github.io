---
layout: distill
title: Haptic Teleoperation of High-dimensional Robotic Systems Using a Feedback MPC Framework
description: 2022 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2022)
giscus_comments: false
tags: publication robotics
date: 2022-03-08

authors:
  - name: Jin Cheng
    url: "https://jin-cheng.me/"
    affiliations:
      name: D-MAVT<d-footnote>Department of Mechanical and Process Engineering</d-footnote>, ETH Zürich
  - name: Firas Abi-Farraj
    url: 
    affiliations:
      name: RSL<d-footnote>Robotic Systems Lab</d-footnote>, ETH Zürich
  - name: Farbod Farshidian
    url: 
    affiliations:
      name: RSL, ETH Zürich
  - name: Marco Hutter
    url:
    affiliations:
      name: RSL, ETH Zürich

bibliography: 2022-10-28-haptic-teleop.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
#toc:
#  - name: Equations
#    # if a section has subsections, you can add them as follows:
#    # subsections:
#    #   - name: Example Child Subsection 1
#    #   - name: Example Child Subsection 2
#  - name: Citations
#  - name: Footnotes
#  - name: Code Blocks
#  - name: Interactive Plots
#  - name: Layouts
#  - name: Other Typography?

# Below is an example of injecting additional post-specific styles.
# If you use this post as a template, delete this _styles block.
#_styles: >
#  .fake-img {
#    background: #bbb;
#    border: 1px solid rgba(0, 0, 0, 0.1);
#    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
#    margin-bottom: 12px;
#  }
#  .fake-img p {
#    font-family: monospace;
#    color: white;
#    text-align: left;
#    margin: 12px 0;
#    text-align: center;
#    font-size: 16px;
#  }

---
<img src="../../../assets/img/haptic-teleop/haptic-teleop.jpg"  width="700">

## Abstract

**Model Predictive Control** (MPC) schemes have proven their efficiency in controlling **high degree-of-freedom** (DoF) complex robotic systems. 
However, they come at a high computational cost and an update rate of about tens of hertz. 
This relatively slow update rate hinders the possibility of stable haptic teleoperation of such systems since the slow feedback loops can cause **instabilities and loss of transparency** to the operator. 
This work presents a novel framework for transparent teleoperation of MPC-controlled complex robotic systems. 
In particular, we employ a feedback MPC approach and exploit its structure to account for the operator input at a fast rate which is independent of the update rate of the MPC loop itself. 
We demonstrate our framework on a mobile manipulator platform and show that it significantly improves haptic teleoperation’s transparency and stability. 
We also highlight that the proposed feedback structure is constraint satisfactory and does not violate any constraints defined in the optimal control problem. 
To the best of our knowledge, this work is the first realization of the bilateral teleoperation of a legged manipulator using a whole-body MPC framework.

[PDF](https://ieeexplore.ieee.org/abstract/document/9981290)

## Supplementary Video
<div class="embed-container"> 
<iframe width="700" height="400" src="https://www.youtube.com/embed/OiprDWv0OcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
</div>

## Presentation
<div class="embed-container">
<iframe width="700" height="400" src="https://www.youtube.com/embed/MLMAnJKk1VM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## BibTeX
<pre class=" language-txt">
<code class=" language-txt" data-lang="txt">
@inproceedings{cheng2022haptic,
  title={Haptic Teleoperation of High-dimensional Robotic Systems Using a Feedback MPC Framework},
  author={Cheng, Jin and Abi-Farraj, Firas and Farshidian, Farbod and Hutter, Marco},
  booktitle={2022 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
  pages={6197--6204},
  year={2022},
  organization={IEEE}
}
</code>
</pre>

