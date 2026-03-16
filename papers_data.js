// Paper Intelligence — 学术情报数据库
// 由 SKILL.md 自动追加，请勿手动编辑结构
// Last updated: auto

var PAPERS_DATA = PAPERS_DATA || [];

// ── 2026-03-16 digest ──────────────────────────────

PAPERS_DATA.push({
  id: "Zhong-2026-fecbf-multi-uav",
  title: "A Feasibility-Enhanced Control Barrier Function Method for Multi-UAV Collision Avoidance",
  authors: "Qishen Zhong et al.",
  year: 2026,
  venue: "arXiv",
  citations: 0,
  badge: "📄",
  topics: ["T3", "T6"],
  date_added: "2026-03-16",
  background: "多无人机协同避碰是自主飞行系统的核心安全需求。控制障碍函数（CBF）方法通过在线求解二次规划（QP）实现安全约束的强制执行，已被广泛应用于单机及小规模多机系统。然而，在稠密多UAV场景中，多个CBF约束同时生效时，约束不相容（constraint incompatibility）会导致QP无解，使安全保证完全失效。本文在去中心化多无人机控制这一实际设定下，针对CBF方法的QP可行性问题提出了系统性解决框架，在sign-consistency约束与松弛变量的基础上给出了可验证的可行性增强方案。",
  abstract_zh: "本文提出可行性增强控制障碍函数（FECBF）框架，通过引入sign-consistency约束与最坏情况估计松弛变量，在去中心化多UAV避碰设定下显著降低QP不可行频率，并通过时延鲁棒性测试与实飞实验验证了有效性。",
  innovations: [
    "明确识别并形式化描述了多UAV稠密场景中CBF-QP约束不相容的可行性失效机制，提出sign-consistency约束作为核心保障设计。",
    "将最坏情况不确定性估计与松弛变量引入去中心化QP公式，在保持实时求解效率的同时提升约束满足的鲁棒性。",
    "完成真实无人机平台实飞验证，并在时延条件下测试鲁棒性，将方法适用范围从仿真扩展至物理平台。"
  ],
  insights: [
    "CBF方法在多智能体设置下面临的核心挑战不是单一约束的违反，而是多个并发约束之间的不相容性。sign-consistency类约束为处理耦合约束提供了一个值得关注的结构性工具。",
    "安全关键控制方法的理论保证往往依赖可行性假设；本文将这一隐性假设转化为可主动设计的系统属性，对形式验证与安全强化学习方向均有启发。",
    "去中心化实现是多UAV安全控制的实用约束，在去中心化框架内解决可行性问题对需要在实时嵌入式平台部署的研究具有直接参考价值。"
  ],
  good_sentences: [
    { original: "significantly reduces infeasibility and improves collision avoidance performance compared to existing methods in dense situations", note: "以对比结构直接陈述实验结论，"dense situations"的限定词精确圈定了方法的适用场景，是method paper结论句的典型写法。" }
  ],
  writing_phrases: [
    { phrase: "feasibility-enhanced", note: "将工程属性（可行性）嵌入方法名称，便于后续工作引用和区分" },
    { phrase: "constraint incompatibility", note: "精确描述多约束并发时QP失效的机制，比"infeasibility"更具诊断价值" },
    { phrase: "decentralized formulation", note: "强调去中心化设定的关键词，与集中式方法形成对比" }
  ],
  methodology: "算法层：输入为多UAV状态向量（位置、速度）及邻居状态，输出为每架UAV的加速度指令。核心QP在标准CBF约束上叠加sign-consistency约束，确保不同障碍物产生的CBF梯度方向一致性；引入松弛变量与最坏情况干扰估计处理时延和不确定性。整体为去中心化结构，每架UAV独立求解QP。\n分析层：可行性分析围绕多约束QP的相容条件展开；sign-consistency约束将几何冲突转化为代数条件；松弛变量引入保留了QP的始终可解性（always-feasible fallback）。",
  results: "在稠密多UAV仿真场景中，FECBF显著降低QP不可行频率并提升碰撞避免成功率。在引入通信时延的条件下仍保持可行性和避碰有效性，验证了最坏情况估计设计的必要性。完成真实无人机平台实飞验证。",
  connection: "分类：T3 Control × LLM · T6 Robotics Navigation\n\n联系：本文属于安全约束优化方向，与T3（安全强化学习/约束优化策略）直接相关。FECBF的可行性增强设计对多智能体安全约束（如safe MARL中的barrier function构造）具有方法论借鉴价值。作为T6方向，为UAV导航的安全约束实现提供了可直接部署的去中心化方案。后续可追踪：将FECBF与学习型轨迹规划结合；以及验证更大规模无人机集群的可扩展性。",
  doi: "https://doi.org/10.48550/arXiv.2603.13103",
  annotation_path: "annotations/Zhong-2026-fecbf-multi-uav.html"
});

PAPERS_DATA.push({
  id: "Li-2026-bicc-grpo-reasoning",
  title: "When Right Meets Wrong: Bilateral Context Conditioning with Reward-Confidence Correction for GRPO",
  authors: "Yu Li et al.",
  year: 2026,
  venue: "arXiv",
  citations: 0,
  badge: "📄",
  topics: ["T1"],
  date_added: "2026-03-16",
  background: "大语言模型的推理能力训练广泛采用基于强化学习的方法，Group Relative Policy Optimization（GRPO）是代表性算法，通过对同一提示的多个采样输出进行相对优势估计来更新策略。然而，GRPO标准实现对每个样本独立计算优势函数，无法直接利用同批次正确样本与错误样本之间的对比信息。此外，奖励信号稀疏或模型置信度与奖励不匹配时，训练不稳定问题较为突出。本文在保持GRPO框架不变的前提下，通过双边上下文条件机制（BiCC）和奖励-置信度修正机制（RCC），在数学推理基准上给出了更稳定、更有效的训练改进。",
  abstract_zh: "本文在GRPO框架基础上提出BiCC和RCC两个机制，分别通过跨正/负样本信息流和奖励-置信度协方差调整优势基准，在多个数学推理基准上实现一致性提升，且无需额外采样或辅助模型。",
  innovations: [
    "BiCC机制使模型在优化过程中直接获取同批次正确与错误推理轨迹的对比信息，将GRPO的组内相对比较从隐式转变为显式（通过上下文条件化直接体现）。",
    "理论分析揭示GRPO目标函数隐式地最大化正确与错误输出策略比之间的间距（margin），BiCC的设计与这一理论性质在机制上相一致。",
    "RCC通过计算奖励与置信度的协方差来修正优势基准，无需引入额外模型或修改采样流程，即可稳定训练动态。"
  ],
  insights: [
    "GRPO等推理训练方法的样本效率受限于同批次样本间的信息隔离；BiCC类跨样本信息流设计指向一类可普遍化的改进方向：在不增加采样成本的前提下提升批次内信息利用率。",
    "奖励信号与模型置信度之间的不对齐是训练不稳定的一个可追踪来源；RCC提供了通过统计量（协方差）将两者解耦的具体途径，这一思路对其他基于奖励的训练方法也可能适用。",
    ""无侵入式"设计原则（对GRPO所有变体兼容且不增加推理开销）对需要在已有训练流程上叠加改进的研究具有参考价值。"
  ],
  good_sentences: [
    { original: "GRPO objectives implicitly maximize margins between policy ratios of correct and incorrect outputs", note: "以"implicitly"一词点明原方法的隐式机制，并为BiCC的显式化设计提供理论锚点，是从理论分析过渡到方法设计的典型连接句。" }
  ],
  writing_phrases: [
    { phrase: "bilateral context conditioning", note: "双边/双向条件化，强调正负样本的对称处理" },
    { phrase: "reward-confidence covariance", note: "将两个独立信号的联合统计量作为调整依据，表述精确" },
    { phrase: "no additional sampling or auxiliary models", note: "明确列举"不增加"的约束，定位方法的轻量化特性" },
    { phrase: "consistent improvements", note: "强调跨基准的稳定性而非单点最优，适合方法论贡献的表达" }
  ],
  methodology: "算法层：在GRPO标准批次采样基础上，BiCC将同批次正确推理轨迹（高奖励样本）与错误轨迹（低奖励样本）拼接为条件上下文，注入当前样本的优势计算中；RCC基于当前批次奖励-置信度协方差调整优势基准，取代纯奖励均值基准。两个机制均在反向传播之前作用于优势估计阶段，无需修改采样流程。\n分析层：理论上GRPO目标可被重写为正确与错误样本策略比间隔的最大化问题；BiCC的上下文条件化使该间隔的优化更直接；RCC的协方差修正抑制了奖励-置信度不对齐引起的梯度方差。",
  results: "BiCC+RCC组合在多个数学推理基准上相对GRPO基线实现一致性提升，改进幅度在各基准间稳定。消融实验验证BiCC与RCC单独使用均有效，组合使用效果更优，证明两个机制的互补性。",
  connection: "分类：T1 LLM Reasoning\n\n联系：本文直接推进T1方向中推理模型训练方法的研究边界，关注GRPO优化过程的信息利用效率与稳定性。BiCC的跨样本信息流设计与chain-of-thought批次训练中的对比学习思路相通，可作为推理模型训练流程改进的参考模块。后续可追踪：将BiCC扩展到代码生成和逻辑推理任务；以及分析BiCC在不同奖励信号密度条件下的适用范围。",
  doi: "https://doi.org/10.48550/arXiv.2603.13134",
  annotation_path: "annotations/Li-2026-bicc-grpo-reasoning.html"
});

PAPERS_DATA.push({
  id: "Sun-2026-esg-bench-hallucination",
  title: "ESG-Bench: Benchmarking Long-Context ESG Reports for Hallucination Mitigation",
  authors: "Siqi Sun et al.",
  year: 2026,
  venue: "AAAI 2026",
  citations: 0,
  badge: "📄",
  topics: ["T4"],
  date_added: "2026-03-16",
  background: "大语言模型在处理长文档（如ESG报告、法律合同、财务披露）时存在幻觉问题，即生成与文档内容不符或无法被原文支持的回答。现有幻觉研究主要集中在通用短文档QA场景，对长上下文专业领域文档的细粒度幻觉评测工具较为匮乏。ESG报告因其结构复杂、数据密集且有明确的事实核查需求，为幻觉研究提供了具有代表性的真实领域。本文在ESG报告长上下文阅读设定下，构建首个含幻觉细粒度标注的QA基准，并验证CoT类提示策略相对于标准提示和直接微调的幻觉抑制效果。",
  abstract_zh: "本文（AAAI 2026）提出ESG-Bench，一个基于真实ESG报告的长上下文QA基准，含人工标注的幻觉细粒度标签，验证了CoT类方法在减少幻觉方面相对标准提示和直接微调具有实质性优势，且该优势可迁移至ESG领域以外的已有QA基准。",
  innovations: [
    "在ESG报告长上下文专业文档设定下构建首个含细粒度幻觉标注（是否被原文支持）的QA基准，填补了长上下文专业领域幻觉评测的数据集空白。",
    "系统性对比标准提示、CoT类提示与直接微调三类方法在幻觉控制上的性能差异，提供具有可重复性的实验基线。",
    "验证ESG-Bench上训练/测试得到的CoT幻觉抑制效果可迁移至其他QA基准，证明基准的域外泛化价值。"
  ],
  insights: [
    "长上下文专业文档的幻觉评测需要细粒度的人工标注（每个答案是否被原文支持），而非仅依赖自动化指标；ESG领域提供了一个兼具可验证性和实际应用价值的标注场景。",
    "CoT提示方法在幻觉控制上相对微调方法的优势，提示推理过程的显式化有助于模型在长文档阅读中锚定原文依据，而非依赖参数化记忆。",
    "基准的域外迁移性（ESG → 其他QA基准）为评估长上下文幻觉抑制方法的泛化能力提供了标准化路径，这一设计思路值得类似领域特定基准借鉴。"
  ],
  good_sentences: [
    { original: "CoT-based methods substantially outperform standard prompting and direct fine-tuning in reducing hallucinations, and that the gains transfer to existing QA benchmarks beyond the ESG domain.", note: "以"substantially outperform"直接陈述幅度，"transfer"一词延伸到泛化性，结构紧凑，是结果总结句的参考模板。" }
  ],
  writing_phrases: [
    { phrase: "fine-grained labels indicating whether model outputs are factually supported", note: "精确描述标注粒度，明确与粗粒度正确/错误标签的区别" },
    { phrase: "grounded in real-world ESG report contexts", note: "强调真实文档来源，区别于合成数据集" },
    { phrase: "gains transfer to existing QA benchmarks", note: "以"transfer"描述跨域泛化，避免了"generalize"的过度宽泛" }
  ],
  methodology: "算法层：ESG-Bench由人工标注者在真实ESG报告上构建QA对，每个答案附带"是否被原文支持"的二元标签。评测流程将模型输出与原文对照，判定幻觉类型。CoT类方法要求模型先生成推理步骤再给出答案，推理链中的引用行为可被监测。\n分析层：幻觉评测核心指标为hallucination rate（答案中被判定为不支持的比例）；CoT方法与基线的对比通过控制模型、数据集不变来隔离提示策略的影响；迁移实验将ESG训练策略应用于其他基准的测试集。",
  results: "CoT类方法相对标准提示和直接微调在幻觉率上实现实质性下降（具体数字未在摘要中列出）。ESG-Bench上的幻觉抑制效果可迁移至其他域外QA基准，泛化性得到验证。",
  connection: "分类：T4 Hallucination & ICL\n\n联系：本文属于T4方向幻觉评测基础设施建设，提供了长上下文专业文档幻觉标注的标准化方案。CoT类方法幻觉抑制效果的验证为"推理过程显式化→幻觉降低"的假设提供了领域特定证据。后续可追踪：将ESG-Bench扩展到多语言版本；以及在RAG流程中引入幻觉标签作为检索质量的反馈信号。",
  doi: "https://doi.org/10.48550/arXiv.2603.13154",
  annotation_path: "annotations/Sun-2026-esg-bench-hallucination.html"
});

PAPERS_DATA.push({
  id: "Barrios-2026-crystal-reasoning",
  title: "Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation",
  authors: "Wayner Barrios et al.",
  year: 2026,
  venue: "arXiv",
  citations: 0,
  badge: "📄",
  topics: ["T1"],
  date_added: "2026-03-16",
  background: "多模态大语言模型的推理能力评测长期依赖最终答案准确率，忽略了推理过程的正确性和步骤顺序的合理性。这类"黑盒"评测无法区分"答案正确但推理错误"与"推理过程正确"两种情形，也无法检测模型在推理步骤上的系统性缺陷（如步骤乱序、选择性使用便于得分的中间步骤）。本文在多模态推理这一设定下，构建首个通过可验证中间步骤评估推理透明度的基准，并提出量化推理步骤质量和顺序的新指标。",
  abstract_zh: "本文提出CRYSTAL基准（6,372个实例），通过Match F1和Ordered Match F1两个步骤级指标评估多模态模型的推理过程质量，对20个多模态大语言模型的评估揭示了"universal cherry-picking"等系统性推理缺陷，并提出Causal Process Reward训练方法，在Match F1上实现+32%提升。",
  innovations: [
    "提出以可验证中间步骤为核心的多模态推理评测框架，与仅测最终答案的传统评测形成方法论对照，为"推理质量"提供了可操作的量化定义。",
    "设计Match F1和Ordered Match F1两个互补指标，分别衡量步骤覆盖率和步骤顺序正确性，并通过Delphi式流程结合人工验证生成参考推理步骤。",
    "在20个多模态模型上系统性揭示"universal cherry-picking"（选择性匹配有利步骤）和"disordered reasoning"（步骤乱序）两类用精度指标无法检测的系统性失败模式。"
  ],
  insights: [
    "准确率评测与推理质量评测之间存在结构性不一致：模型可以通过选择性推理在最终答案准确率上表现良好，而实际推理过程存在严重缺陷。这一"非单调缩放权衡"提示对现有推理能力排行榜的解读需要保持谨慎。",
    "步骤顺序是推理质量的独立维度：Ordered Match F1相对Match F1可以揭示额外的模型差异，说明"做对每一步"与"按正确顺序推理"是两个需要分别测量的能力。",
    "Causal Process Reward训练方法（+32% Match F1）表明以推理步骤而非最终答案为优化目标可以显著改善推理过程质量，为process reward model研究提供了多模态领域的实验证据。"
  ],
  good_sentences: [
    { original: "universal cherry-picking, non-monotonic scaling trade-offs, and disordered reasoning reveal systematic failures invisible to accuracy metrics", note: "三个并列名词短语枚举具体失败模式，"invisible to accuracy metrics"一词既批评现有评测范式，又为本文新指标提供正当性依据，论证结构完整。" }
  ],
  writing_phrases: [
    { phrase: "beyond final answers", note: "标题词组，简洁地宣示对现有评测范式的超越意图" },
    { phrase: "verifiable intermediate steps", note: "明确推理步骤可被外部核查的属性，区别于"reasoning traces"的模糊表述" },
    { phrase: "universal cherry-picking", note: "命名一类具体的系统性失败模式，便于后续文献引用" },
    { phrase: "non-monotonic scaling trade-offs", note: "描述模型规模与推理质量之间非线性关系的技术术语" },
    { phrase: "Delphi-inspired pipeline", note: "引用社会科学方法论描述参考步骤生成流程，提升可信度" }
  ],
  methodology: "算法层：CRYSTAL基准通过Delphi式人机协作流程生成多步推理参考答案；评测时将模型输出的推理步骤与参考步骤进行语义匹配，计算Match F1（覆盖率）和Ordered Match F1（顺序正确性）。Causal Process Reward训练方法以步骤级奖励信号替代答案级奖励，通过强化学习优化推理过程。\n分析层：两个F1指标提供推理质量的二维度量；20个模型的系统性评估揭示了规模与推理质量的非单调关系；Causal Process Reward的+32%提升隔离了训练目标（步骤奖励 vs 答案奖励）对推理质量的贡献。",
  results: "在20个多模态大语言模型上识别出universal cherry-picking和disordered reasoning两类系统性缺陷，准确率指标无法检测这些问题。模型规模扩大不能单调提升推理步骤质量，出现accuracy-reasoning quality的trade-off。Causal Process Reward方法在Match F1上实现+32%的改进，证明步骤级优化目标的有效性。",
  connection: "分类：T1 LLM Reasoning\n\n联系：本文直接推进T1方向中多模态推理评测方法论的研究边界，提供了超越准确率的步骤级评估框架。CRYSTAL的发现（cherry-picking、disordered reasoning）对chain-of-thought相关研究具有警示意义，表明CoT推理质量需要独立于准确率进行测量。Causal Process Reward的实验结果为process reward model研究在多模态领域的有效性提供了直接证据。后续可追踪：将CRYSTAL扩展到纯语言推理任务；以及进一步细化step-level reward的粒度设计。",
  doi: "https://doi.org/10.48550/arXiv.2603.13099",
  annotation_path: "annotations/Barrios-2026-crystal-reasoning.html"
});

PAPERS_DATA.push({
  id: "Moreau-2026-faithful-cbm",
  title: "Towards Faithful Multimodal Concept Bottleneck Models",
  authors: "Pierre Moreau et al.",
  year: 2026,
  venue: "arXiv",
  citations: 0,
  badge: "📄",
  topics: ["T2"],
  date_added: "2026-03-16",
  background: "概念瓶颈模型（CBM）通过人类可理解概念作为中间表示来提供可解释预测。在多模态（图像+文本）场景中，CBM面临两个核心问题：（1）概念检测的准确性；（2）概念泄漏（leakage）问题（概念表示中残存与预测目标相关的非概念信息，导致可解释性失真）。现有多模态CBM工作在处理泄漏问题时缺乏系统性优化机制，且预测头设计缺乏对概念交互的建模能力。本文在多模态CBM设定下，通过可微分泄漏损失和Kolmogorov-Arnold网络预测头的组合，在准确率、概念检测质量和泄漏抑制三个维度上实现帕累托最优。",
  abstract_zh: "本文提出f-CBM框架，通过可微分泄漏损失和Kolmogorov-Arnold Network（KAN）预测头，在多模态和纯文本数据集上实现准确率、概念检测精度与泄漏抑制三个指标的最优权衡。",
  innovations: [
    "提出可微分泄漏损失（differentiable leakage loss）作为概念泄漏的端对端优化目标，将泄漏抑制从后处理步骤整合至训练过程，使泄漏度量可被梯度优化直接针对。",
    "引入Kolmogorov-Arnold Network作为概念到预测的函数头，替代线性预测头，在保持可解释性的同时提升对概念间非线性交互的建模能力。",
    "在多模态（图像+文本）和纯文本两类设定下系统性验证框架有效性，证明泄漏抑制设计不依赖于特定模态组合。"
  ],
  insights: [
    "CBM的"可解释性"在泄漏存在的情况下是名义上的而非实质性的；泄漏损失的可微分化将这一可解释性失真从评估阶段前移至训练阶段，是将可解释性属性转化为可优化目标的一个具体示例。",
    "KAN作为预测头的设计表明，可解释性（通过概念瓶颈保障）与建模能力（通过非线性函数逼近保障）之间的权衡可以在网络架构层面调和，而非必须通过牺牲其中一方来换取另一方。",
    "三维度帕累托最优（准确率×检测质量×泄漏）的实验框架为多模态可解释性方法的标准化评估提供了参考，避免了单指标优化掩盖其他维度退化的问题。"
  ],
  good_sentences: [
    { original: "the best trade-off between task accuracy, concept detection, and leakage reduction", note: "以三元trade-off结构定位方法的优化目标，明确将leakage reduction与准确率并列为独立评估维度，是将可解释性属性量化为优化目标的典型表述方式。" }
  ],
  writing_phrases: [
    { phrase: "differentiable leakage loss", note: "将泄漏问题转化为可微损失函数的命名，明确方法的技术路径" },
    { phrase: "faithful", note: "标题词，指模型的概念表示真实反映了对应概念，与"accurate"区分" },
    { phrase: "leakage mitigation", note: "精确描述目标（降低但不必完全消除泄漏），避免了过度承诺" }
  ],
  methodology: "算法层：输入为多模态（图像+文本）或纯文本样本，输出为通过概念中间层的预测结果。概念检测层将输入映射到概念得分向量；可微分泄漏损失在训练时惩罚概念表示中残存的非概念信息（通过对抗性或正交性约束实现）；KAN预测头替代线性层，对概念得分向量进行非线性组合。\n分析层：三个评估维度（任务准确率、概念检测F1、泄漏度量）构成多目标优化问题；实验通过帕累托前沿分析比较各方法；泄漏度量的具体定义基于概念表示与任务标签的互信息或预测误差。",
  results: "f-CBM在准确率、概念检测精度和泄漏抑制三个维度上实现最优权衡，优于现有CBM变体。方法在图文多模态和纯文本两类数据集上均有效，验证了设计的跨模态适用性。",
  connection: "分类：T2 Interpretability\n\n联系：本文属于T2方向基于概念的可解释性（concept-based interpretability）研究，推进了多模态CBM在可信度（faithfulness）层面的研究边界。可微分泄漏损失的设计为其他需要将可解释性属性转化为优化目标的方法提供了参考框架。后续可追踪方向：将f-CBM与大型视觉语言模型（VLM）结合；以及将泄漏损失推广到神经网络中间层的通用表示纯化任务。",
  doi: "https://doi.org/10.48550/arXiv.2603.13163",
  annotation_path: "annotations/Moreau-2026-faithful-cbm.html"
});

// ── 示例条目（可删除）──────────────────────────────
PAPERS_DATA.push({
  id: "Wei-2022-chain-of-thought",
  title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
  authors: "Wei, J. et al.",
  year: 2022,
  venue: "NeurIPS",
  citations: 8420,
  badge: "🔥",
  topics: ["T1", "T4"],
  date_added: "2026-03-16",
  background: "大型语言模型在复杂推理任务上表现不稳定，传统 few-shot prompting 无法引导模型展示中间推理步骤，导致多步骤问题（算术、常识、符号推理）的准确率较低。",
  thesis: "通过在 few-shot 示例中加入自然语言推理链（chain-of-thought），可以显著激活大模型的逐步推理能力，且该能力随模型规模出现涌现。",
  abstract_zh: "本文提出 Chain-of-Thought Prompting，在 few-shot 示例中嵌入逐步推理过程，使 GPT-3 175B 在 GSM8K 上准确率从 17% 提升至 58%，超越此前 SOTA。",
  innovations: [
    "首次系统验证了自然语言推理链可作为 prompting 格式提升 LLM 复杂推理能力",
    "发现 CoT 能力是超大规模模型（>100B）的涌现特性，小模型无效",
    "证明 CoT 无需微调，仅 prompting 即可迁移至多种推理类型（算术/常识/符号）"
  ],
  insights: [
    "推理能力的关键不在于模型大小本身，而在于模型是否具备将复杂问题分解为子步骤的内部表示",
    "Prompting 格式对模型行为的影响远超预期——同一模型通过不同 prompt 可有量级差距的性能表现",
    "涌现（Emergence）现象暗示现有评测体系可能严重低估了中小模型的潜在上限"
  ],
  good_sentences: [
    {
      original: "We find that chain-of-thought prompting does not positively impact performance for small models, and only yields performance gains when used with models of ∼100B parameters.",
      note: "清晰的实证边界声明——好论文不只说'有效'，还要说清楚'在什么条件下有效'，是写作严谨性的范本。"
    }
  ],
  methodology: "在 PaLM、GPT-3、LaMDA 等模型上，构造包含推理链的 few-shot exemplars，对比标准 prompting 在 GSM8K、SVAMP、AQuA、StrategyQA、BIG-Bench 等基准上的表现，消融实验验证推理链各组件的贡献。",
  results: "PaLM 540B + CoT 在 GSM8K 达 58%（+41% vs 标准 prompting），在 MGSM 多语言推理任务上同样大幅领先，验证了跨语言迁移能力。",
  connection: "T1 核心论文。CoT 是理解 LLM Reasoning 机制研究的前提背景，且其涌现特性与 T2 可解释性研究直接相关——为什么推理链能工作，内部表示发生了什么变化？",
  doi: "https://arxiv.org/abs/2201.11903",
  annotation_path: "annotations/Wei-2022-chain-of-thought.html"
});
