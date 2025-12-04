document.addEventListener('DOMContentLoaded', () => {
    const chaptersContainer = document.getElementById('chapters-container');
    const chapterDetail = document.getElementById('chapter-detail');
    const detailTitle = document.getElementById('detail-title');
    const closeDetailBtn = document.getElementById('close-detail');
    const relatosList = document.getElementById('relatos-list');
    const relatosTitle = document.getElementById('relatos-title');

    // Raw Video Data (TSV)
    const rawVideoData = `1	Marcos 1.1-8 Juan el Bautista | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=yNmVtpMm3Q4&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=1	yNmVtpMm3Q4	2025-11-20T18:24:24Z
2	Marcos 1.9-11 Juan bautiza a Jesús | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=VTbnXftRENc&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=2	VTbnXftRENc	2025-11-20T18:27:56Z
3	Marcos 1.12-13 Jesús vence al diablo | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=BOf2BmjN04Q&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=3	BOf2BmjN04Q	2025-11-20T18:29:35Z
4	Marcos 1.14-15 Jesús comienza su trabajo | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=eoMjAqkW-mM&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=4	eoMjAqkW-mM	2025-11-20T18:31:42Z
5	Marcos 1.16-20 Jesús elige a cuatro pescadores | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=c9Mi2j7gohs&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=5	c9Mi2j7gohs	2025-11-20T18:33:15Z
6	Marcos 1.21-28 El hombre con un espíritu malo | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=Y2GfEwoLdJw&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=6	Y2GfEwoLdJw	2025-11-20T18:36:30Z
7	Marcos 1.29-34 Jesús sana a mucha gente | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=Y2PB2gfT_0M&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=7	Y2PB2gfT_0M	2025-11-20T18:39:32Z
8	Marcos 1.35-39 Jesús anuncia las buenas noticias | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=_j9CJmI7IMs&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=8	_j9CJmI7IMs	2025-11-20T18:42:17Z
9	Marcos 1.40-45 Jesús sana a un leproso | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=9ZqvXc-aNvs&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=9	9ZqvXc-aNvs	2025-11-20T18:45:02Z
10	Marcos 2.1-12 Jesús y el paralítico | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=Mv85NVJCViY&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=10	Mv85NVJCViY	2025-11-20T19:25:28Z
11	Marcos 2.13-17 Jesús llama a Mateo | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=3MzGlS_gNWU&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=11	3MzGlS_gNWU	2025-11-20T19:29:37Z
12	Marcos 2.18-22 Jesús ensaña sobre el ayuno | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=SIZugJsr7NA&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=12	SIZugJsr7NA	2025-11-20T19:32:02Z
13	Marcos 2.23-28 Discípulos arrancan espigas de trigo | Evangelio de Marcos Lengua de Señas Argentina	https://www.youtube.com/watch?v=LTHtuU8hLNQ&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=13	LTHtuU8hLNQ	2025-11-20T19:35:12Z
14	Marcos 3.1-6 Jesús sana a un hombre en sábado | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=cSU2-M3PvLA&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=14	cSU2-M3PvLA	2025-11-20T20:17:15Z
15	Marcos 3.7-12 Jesús enseña y sana | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=D77ao9XVy8A&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=15	D77ao9XVy8A	2025-11-20T20:20:23Z
16	Marcos 3.13-19 Jesús elige a doce apóstoles | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=wNjkkZZ-MQc&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=16	wNjkkZZ-MQc	2025-11-20T20:14:57Z
17	Marcos 3.20-35 Jesús y el jefe de los demonios | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=WDoHOkwbLGg&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=17	WDoHOkwbLGg	2025-11-20T20:12:03Z
18	Marcos 4.1-9 El ejemplo de las semillas | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=ft7zQ-NIlUk&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=18	ft7zQ-NIlUk	2025-11-25T18:10:20Z
19	Marcos 4.10-12 ¿Por qué Jesús enseña con ejemplos? | Evangelio de Marcos Lengua de Señas Argentina	https://www.youtube.com/watch?v=34R8VrV4TUI&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=19	34R8VrV4TUI	2025-11-25T18:07:07Z
20	Marcos 4.13-20 Jesús explica ejemplo de las semillas | Evangelio de Marcos Lengua de Señas Argentina	https://www.youtube.com/watch?v=HL6biaOA_OA&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=20	HL6biaOA_OA	2025-11-25T18:22:50Z
21	Marcos 4.21-25 El ejemplo de la luz | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=ye5oeZ2LVg8&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=21	ye5oeZ2LVg8	2025-11-25T18:03:49Z
22	Marcos 4.26-29 Comparación con la semilla que crece | Evangelio de Marcos Lengua de Señas Argentina	https://www.youtube.com/watch?v=ChQE3W-a6Zw&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=22	ChQE3W-a6Zw	2025-11-25T18:20:23Z
23	Marcos 4.30-34 La semilla de mostaza | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=sJdrQzg2WQ4&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=23	sJdrQzg2WQ4	2025-11-25T18:17:38Z
24	Marcos 4.35-41 La gran tormenta | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=sZ64_eyTN18&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=24	sZ64_eyTN18	2025-11-25T18:14:21Z
25	Marcos 5.1-20 El hombre con muchos espíritus malos | Evangelio de Marcos Lengua de Señas Argentina	https://www.youtube.com/watch?v=FCEWu7FrXxo&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=25	FCEWu7FrXxo	2025-11-25T21:08:31Z
26	Marcos 5.21-43 Una niña muerta y una mujer enferma | Evangelio de Marcos Lengua de Señas Argentina	https://www.youtube.com/watch?v=aDEb_QQFoWU&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=26	aDEb_QQFoWU	2025-11-25T21:08:17Z
27	Marcos 6.1-6 Jesús en Nazaret | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=RwNG6YLJyXQ&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=27	RwNG6YLJyXQ	2025-11-25T21:58:37Z
28	Marcos 6.7-13 Jesús envía a los doce apóstoles | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=QpcBgDDKf1Q&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=28	QpcBgDDKf1Q	2025-11-25T22:13:31Z
29	Marcos 6.14-29 La muerte de Juan el Bautista | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=RHYhfUZlGJ4&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=29	RHYhfUZlGJ4	2025-11-25T22:10:25Z
30	Marcos 6.30-44 Jesús da de comer a mucha gente | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=iXujwLynLAs&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=30	iXujwLynLAs	2025-11-25T22:08:09Z
31	Marcos 6.45-52 Jesús camina sobre el agua | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=Qf11yXu1eCc&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=31	Qf11yXu1eCc	2025-11-25T22:04:29Z
32	Marcos 6.53-56 Jesús en Genesaret | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=u6Gdmwxlmhg&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=32	u6Gdmwxlmhg	2025-11-25T22:01:36Z
33	Marcos 7.1-23 Lo que realmente ensucia | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=B9Drns8vg0I&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=33	B9Drns8vg0I	2025-11-27T13:22:50Z
34	Marcos 7.24-30 Una mujer no judía confía en Dios | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=gbCVn5OfuW4&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=34	gbCVn5OfuW4	2025-11-27T13:19:44Z
35	Marcos 7.31-37 Jesús sana a un sordo y tartamudo | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=NVSbWG9uV40&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=35	NVSbWG9uV40	2025-11-27T13:16:57Z
36	Marcos 8.1-10 Jesús alimenta a mucha gente | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=8bKrEgGSgfw&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=36	8bKrEgGSgfw	2025-11-27T13:26:08Z
37	Marcos 8.11-13 Una señal milagrosa | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=HDBx0GhzywI&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=37	HDBx0GhzywI	2025-11-27T13:40:32Z
38	Marcos 8.14-21 Las enseñanzas de los fariseos | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=dkltiwHOkz4&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=38	dkltiwHOkz4	2025-11-27T13:37:41Z
39	Marcos 8.22-26 Jesús sana a un ciego en Betsaida | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=bXdvpmMVNEs&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=39	bXdvpmMVNEs	2025-11-27T13:34:34Z
40	Marcos 8.27-30 ¿Quién es Jesús? | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=IqOEdczz9dU&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=40	IqOEdczz9dU	2025-11-27T13:32:16Z
41	Marcos 8.31-9.1 Jesús habla de su muerte | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=bqGIl8hSzR8&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=41	bqGIl8hSzR8	2025-11-27T13:29:31Z
42	Marcos 9.2-13 Jesús se transforma | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=F4gX38CTFz4&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=42	F4gX38CTFz4	2025-11-27T12:18:43Z
43	Marcos 9.14-29 Jesús sana a un muchacho | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=PDNd3wdjI8I&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=43	PDNd3wdjI8I	2025-11-27T13:53:39Z
44	Marcos 9.30-32 Jesús habla otra vez de su muerte | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=yEOvpw6o6ys&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=44	yEOvpw6o6ys	2025-11-27T13:51:10Z
45	Marcos 9.33-37 ¿Quién es el más importante? | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=1iH2T_hcnxg&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=45	1iH2T_hcnxg	2025-11-27T13:48:37Z
46	Marcos 9.38-41 Los que están a favor de Jesús | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=jWwKVvmZxjI&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=46	jWwKVvmZxjI	2025-11-27T13:45:59Z
47	Marcos 9.42.50 Las tentaciones | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=5KTu5yir9lQ&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=47	5KTu5yir9lQ	2025-11-27T13:42:52Z
48	Marcos 10.1-12 Jesús ensaña sobre el divorcio | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=xQk206J6e-k&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=48	xQk206J6e-k	2025-11-28T12:19:15Z
49	Marcos 10.13-16 Jesús bendice a los niños | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=dOYHl3ADfco&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=49	dOYHl3ADfco	2025-11-28T12:17:14Z
50	Marcos 10.17-31 El hombre rico | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=JsXIOhghV5A&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=50	JsXIOhghV5A	2025-11-27T12:24:01Z
51	Marcos 10.32-34 Jesús habla otra vez de su muerte | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=Bwq4nKPxP74&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=51	Bwq4nKPxP74	2025-11-28T12:33:25Z
52	Marcos 10.35-45 La petición de Santiago y de Juan | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=s14Ew3shLR4&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=52	s14Ew3shLR4	2025-11-27T12:29:19Z
53	Marcos 10.46-52 Jesús y el ciego Bartimeo | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=cR2AYY2AXIE&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=53	cR2AYY2AXIE	2025-11-27T12:36:34Z
54	Marcos 11.1-11 Jesús entra en Jerusalén | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=-VVADJ5sCfg&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=54	-VVADJ5sCfg	2025-11-27T18:13:48Z
55	Marcos 11.12-14 Jesús y la higuera | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=uPziRgvVIuw&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=55	uPziRgvVIuw	2025-11-27T18:05:59Z
56	Marcos 11.15-19 Jesús y los comerciantes del templo | Evangelio de Marcos Lengua de Señas Argentina	https://www.youtube.com/watch?v=4A20_VqJ8F0&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=56	4A20_VqJ8F0	2025-11-27T18:10:21Z
57	Marcos 11.20-26 La lección de la higuera | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=tulcuU3FOts&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=57	tulcuU3FOts	2025-11-27T18:07:26Z
58	Marcos 11.27-33 La autoridad de Jesús | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=8pFnqcsCZY4&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=58	8pFnqcsCZY4	2025-11-27T18:17:11Z
59	Marcos 12.1-12 La viña alquilada | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=tHmUInr7URE&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=59	tHmUInr7URE	2025-11-27T18:20:28Z
60	Marcos 12.13-17 Una trampa para Jesús | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=AkMir-1_BXw&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=60	AkMir-1_BXw	2025-11-27T18:23:33Z
61	Marcos 12.18-27 Los saduceos hablan con Jesús | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=72NVuTUG2Ic&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=61	72NVuTUG2Ic	2025-11-27T18:26:11Z
62	Marcos 12.28-34 Los dos mandamientos más importantes | Evangelio de Marcos Lengua de Señas Argentina	https://www.youtube.com/watch?v=ZmSLKLOZ700&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=62	ZmSLKLOZ700	2025-11-27T18:28:41Z
63	Marcos 12.35-37 La pregunta acerca del Mesías | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=VKt9xmQctPw&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=63	VKt9xmQctPw	2025-11-27T18:31:10Z
64	Marcos 12.38-40 Jesús advierte a la gente y discípulos | Evangelio Marcos Lengua de Señas Argentina	https://www.youtube.com/watch?v=KI0R7H2enHc&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=64	KI0R7H2enHc	2025-11-27T18:33:44Z
65	Marcos 12.41-44 La ofrenda de la viuda pobre | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=pS1PE2iuUho&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=65	pS1PE2iuUho	2025-11-27T18:36:35Z
66	Marcos 13.1-2 El templo será destruido | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=eow5bojRG30&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=66	eow5bojRG30	2025-11-27T19:33:10Z
67	Marcos 13.3-13 Prepárense para el fin | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=JdIaXKUAhDI&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=67	JdIaXKUAhDI	2025-11-27T19:34:28Z
68	Marcos 13.14-23 Una señal para huir | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=JZgjxdjg4tY&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=68	JZgjxdjg4tY	2025-11-27T19:37:26Z
69	Marcos 13.24-27 El regreso del Hijo del hombre | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=H67BqK_cvNI&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=69	H67BqK_cvNI	2025-11-27T19:40:42Z
70	Marcos 13.28-37 La lección de la higuera | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=O29usaRk0J4&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=70	O29usaRk0J4	2025-11-27T19:42:41Z
71	Marcos 14.1-2 Un plan contra Jesús | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=GfMx9htSi4Y&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=71	GfMx9htSi4Y	2025-11-27T19:46:08Z
72	Marcos 14.3-9 Mujer derrama perfume sobre Jesús | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=DCD8ST1hjWY&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=72	DCD8ST1hjWY	2025-11-27T19:48:38Z
73	Marcos 14.10-11 Judas traiciona a Jesús | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=ThmIIuLKpaY&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=73	ThmIIuLKpaY	2025-11-27T19:52:32Z
74	Marcos 14.12-25 Una cena inolvidable | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=Pyn6fwn3sPM&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=74	Pyn6fwn3sPM	2025-11-27T19:55:42Z
75	Marcos 14.26-31 Pedro promete no dejar a Jesús | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=OSWhYuTZxg8&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=75	OSWhYuTZxg8	2025-11-27T19:58:28Z
76	Marcos 14.32-42 Jesús ora con mucha tristeza | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=y2oib_F47Sw&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=76	y2oib_F47Sw	2025-11-27T16:34:11Z
77	Marcos 14.43-52 Los enemigos apresan a Jesús | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=sl1C4GIRnpg&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=77	sl1C4GIRnpg	2025-11-27T20:02:07Z
78	Marcos 14.53-65 El juicio contra Jesús | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=rxOhdTrMARE&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=78	rxOhdTrMARE	2025-11-27T16:38:30Z
79	Marcos 15.1-5 Jesús y Pilato | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=HFJI-Jj9iT4&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=79	HFJI-Jj9iT4	2025-11-28T00:29:15Z
80	Marcos 15.6-15 ¡Qué lo claven en una cruz! | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=l7FZ7K8XtLg&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=80	l7FZ7K8XtLg	2025-11-28T00:32:29Z
81	Marcos 15.16-32 Todos se burlan de Jesús | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=SyjrpIsj1SU&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=81	SyjrpIsj1SU	2025-11-27T16:28:40Z
82	Marcos 15.33-41 Jesús muere | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=Qa-oKIQcSUY&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=82	Qa-oKIQcSUY	2025-11-28T00:36:07Z
83	Marcos 15.42-47 El entierro de Jesús | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=PWPse_88ixw&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=83	PWPse_88ixw	2025-11-28T00:39:22Z
84	Marcos 16.1-8 ¡Él está vivo! | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=PA71PehwrwU&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=84	PA71PehwrwU	2025-11-28T00:41:53Z
85	Marcos 16.9-10 Otra final del libro de Marcos | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=WUgcWEiKjio&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=85	WUgcWEiKjio	2025-11-28T00:56:33Z
86	Marcos 16.9-11 Jesús se aparece a María Magdalena | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=mG8gxA6SjkE&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=86	mG8gxA6SjkE	2025-11-28T00:45:42Z
87	Marcos 16.12-13 Jesús se aparece a dos discípulos | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=QyAkf_2QGkw&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=87	QyAkf_2QGkw	2025-11-28T00:48:29Z
88	Marcos 16.14-18 La misión de los discípulos | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=T8nIeYeYMzg&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=88	T8nIeYeYMzg	2025-11-28T00:50:19Z
89	Marcos 16.19-20 Jesús sube al cielo | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=98vFT5aqtfc&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=89	98vFT5aqtfc	2025-11-28T00:54:07Z
90	Marcos 10.32-34 Jesús habla otra vez de su muerte | Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=Bwq4nKPxP74&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=90	Bwq4nKPxP74	2025-11-28T12:33:25Z
91	CRÉDITOS - Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=IlcHRFUNAAs&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=91	IlcHRFUNAAs	2025-11-27T16:49:07Z
92	NOTA FINAL - Evangelio de Marcos en Lengua de Señas Argentina	https://www.youtube.com/watch?v=xwpXJkRxSe4&list=PL4N_-M__-s5-817-TmqSgOVQRxqGL6G85&index=92	xwpXJkRxSe4	2025-11-27T16:53:25Z
`;

    function parseVideoData(tsv) {
        const lines = tsv.trim().split('\n');
        const chaptersMap = new Map();

        lines.forEach(line => {
            const parts = line.split('\t');
            if (parts.length < 4) return;

            const title = parts[1];
            const videoId = parts[3];

            // Regex to extract Chapter and Range: "Marcos 1.1-8 ..."
            const match = title.match(/Marcos (\d+)\.(\d+(?:-\d+)?)/);

            if (match) {
                const chapterNum = parseInt(match[1], 10);
                const range = match[2];

                if (!chaptersMap.has(chapterNum)) {
                    chaptersMap.set(chapterNum, {
                        id: chapterNum,
                        relatos: [],
                        videos: {
                            "relato-biblico": { title: "Vídeo do Relato Bíblico", color: "linear-gradient(45deg, #2b2b2b, #4a4a4a)" },
                            argumentos: { title: "Vídeo del Argumentos", color: "linear-gradient(45deg, #1a4bd0, #0d2b80)" },
                            creditos: { title: "Vídeo de los Créditos", color: "linear-gradient(45deg, #ffbf00, #b38600)" }
                        }
                    });
                }

                const chapter = chaptersMap.get(chapterNum);
                chapter.relatos.push({
                    range: range,
                    videoId: videoId,
                    title: title
                });
            }
        });

        // Convert map to array and sort by ID
        return Array.from(chaptersMap.values()).sort((a, b) => a.id - b.id);
    }

    const chaptersData = parseVideoData(rawVideoData);

    let activeChapterId = null;
    let activeTabId = 'relato-biblico'; // Default tab

    // Initialize Grid
    renderChaptersGrid();

    // Event Listeners
    closeDetailBtn.addEventListener('click', closeDetail);

    // Tab Logic
    const tabs = document.querySelectorAll('[role="tab"]');
    tabs.forEach(tab => {
        tab.addEventListener('click', handleTabClick);
        tab.addEventListener('keydown', handleTabKeydown);
    });

    function renderChaptersGrid() {
        chaptersContainer.innerHTML = '';
        chaptersData.forEach(chapter => {
            const btn = document.createElement('button');
            btn.className = 'chapter-btn';
            btn.textContent = chapter.id;
            btn.setAttribute('aria-label', `Capítulo ${chapter.id}`);
            btn.setAttribute('aria-expanded', 'false');
            btn.setAttribute('aria-controls', 'chapter-detail');

            if (activeChapterId === chapter.id) {
                btn.classList.add('active');
                btn.setAttribute('aria-expanded', 'true');
            }

            btn.addEventListener('click', () => toggleChapter(chapter.id));
            chaptersContainer.appendChild(btn);
        });
    }

    function toggleChapter(id) {
        if (activeChapterId === id) {
            // Keep open
        } else {
            activeChapterId = id;
            // Reset to default tab when opening new chapter
            activeTabId = 'relato-biblico';
            resetTabs();
            openDetail(id);
        }
        renderChaptersGrid();
    }
    let activeRelatoRange = null;

    function openDetail(id) {
        const chapter = chaptersData.find(c => c.id === id);
        if (!chapter) return;

        // Default to first relato
        activeRelatoRange = chapter.relatos[0].range;

        // Update Content
        updateTitles(id, activeRelatoRange);
        relatosTitle.textContent = `Relatos bíblicos | Capítulo ${id}`;

        updateMainVideo(chapter, activeTabId);

        // Render Pericopes
        relatosList.innerHTML = '';
        chapter.relatos.forEach((p, index) => {
            const pBtn = document.createElement('button');
            pBtn.className = 'relato-btn';

            if (index === 0) pBtn.classList.add('active');

            pBtn.textContent = p.range;
            pBtn.setAttribute('aria-label', `Versículos ${p.range}`);

            pBtn.addEventListener('click', () => {
                document.querySelectorAll('.relato-btn').forEach(b => b.classList.remove('active'));
                pBtn.classList.add('active');

                activeRelatoRange = p.range;
                updateTitles(id, activeRelatoRange);
                updateMainVideo(chapter, activeTabId);
            });

            relatosList.appendChild(pBtn);
        });

        // Show Detail
        chapterDetail.classList.remove('hidden');
        chapterDetail.setAttribute('aria-hidden', 'false');

        chapterDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeDetailBtn.focus();
    }

    function updateTitles(chapterId, range) {
        detailTitle.textContent = `Capítulo ${chapterId} - Relato Bíblico ${range}`;
    }

    function updateMainVideo(chapter, type) {
        const videoData = chapter.videos[type];
        const videoPlaceholder = document.querySelector('.video-placeholder');

        // Clear previous content (iframe or placeholder)
        videoPlaceholder.innerHTML = '';
        videoPlaceholder.style.background = videoData.color;

        if (type === 'relato-biblico' && activeRelatoRange) {
            // Find the specific relato video
            const relato = chapter.relatos.find(r => r.range === activeRelatoRange);
            if (relato && relato.videoId) {
                // Embed YouTube Video
                const iframe = document.createElement('iframe');
                iframe.width = "560";
                iframe.height = "315";
                iframe.src = `https://www.youtube.com/embed/${relato.videoId}?autoplay=1`;
                iframe.title = "YouTube video player";
                iframe.frameBorder = "0";
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
                iframe.referrerPolicy = "strict-origin-when-cross-origin";
                iframe.allowFullscreen = true;

                // Keep responsive styling
                iframe.style.width = "100%";
                iframe.style.height = "100%";

                videoPlaceholder.appendChild(iframe);
                return; // Exit, no need to show placeholder text
            }
        }


    }

    function closeDetail() {
        activeChapterId = null;
        chapterDetail.classList.add('hidden');
        chapterDetail.setAttribute('aria-hidden', 'true');
        renderChaptersGrid();
    }



    // Tab Functions
    function handleTabClick(e) {
        const targetTab = e.target;
        activateTab(targetTab);
    }

    function handleTabKeydown(e) {
        const key = e.key;
        const currentTab = e.target;
        const allTabs = Array.from(document.querySelectorAll('[role="tab"]'));
        const index = allTabs.indexOf(currentTab);

        let nextTab = null;
        if (key === 'ArrowRight') {
            nextTab = allTabs[(index + 1) % allTabs.length];
        } else if (key === 'ArrowLeft') {
            nextTab = allTabs[(index - 1 + allTabs.length) % allTabs.length];
        }

        if (nextTab) {
            nextTab.focus();
            activateTab(nextTab);
        }
    }

    function activateTab(tab) {
        // Deselect all
        document.querySelectorAll('[role="tab"]').forEach(t => {
            t.setAttribute('aria-selected', 'false');
        });
        document.querySelectorAll('[role="tabpanel"]').forEach(p => {
            p.hidden = true;
        });

        // Select target
        tab.setAttribute('aria-selected', 'true');
        const panelId = tab.getAttribute('aria-controls');
        document.getElementById(panelId).hidden = false;

        // Update Video
        // Extract type from id: tab-relato-biblico -> relato-biblico
        const type = tab.id.replace('tab-', '');
        activeTabId = type;

        if (activeChapterId) {
            const chapter = chaptersData.find(c => c.id === activeChapterId);
            if (chapter) {
                updateMainVideo(chapter, type);
            }
        }
    }

    function resetTabs() {
        const defaultTab = document.getElementById('tab-relato-biblico');
        if (defaultTab) activateTab(defaultTab);
    }
});
