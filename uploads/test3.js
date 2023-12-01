(window.webpackJsonp = window.webpackJsonp || []).push([[9], {
    1036: function(t, e, n) {
        "use strict";
        n(925)
    },
    1038: function(t, e, n) {
        "use strict";
        n(927)
    },
    1039: function(t, e, n) {
        "use strict";
        n(928)
    },
    758: function(t, e, n) {
        "use strict";
        n(29),
        n(67);
        var r = {
            methods: {
                action: function() {
                    ["panel-classes-id-sections-section_id-learningmaterial_id", "panel-groups-id-sections-section_id-learningmaterial_id"].indexOf(this.$route.name) > -1 ? this.$router.push({
                        name: this.$route.name.replace("-learningmaterial_id", ""),
                        params: {
                            id: this.$route.params.id,
                            section_id: this.$route.params.section_id
                        }
                    }) : ["panel-classes-id-sections-section_id", "panel-groups-id-sections-section_id"].indexOf(this.$route.name) > -1 ? this.$router.push({
                        name: this.$route.name.replace("-section_id", ""),
                        params: {
                            id: this.$route.params.id
                        }
                    }) : ["panel-classes-id", "panel-groups-id"].indexOf(this.$route.name) > -1 ? ["panel-classes-id"].indexOf(this.$route.name) > -1 ? this.$router.push({
                        name: this.$route.name.replace("-id", "")
                    }) : ["panel-groups-id"].indexOf(this.$route.name) > -1 ? this.$router.back() : this.$router.push({
                        name: this.$route.name.replace("-id", "")
                    }) : this.$router.back()
                }
            }
        }
          , l = n(4)
          , component = Object(l.a)(r, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("a", {
                staticClass: "button is-text has-text-primary font-14",
                attrs: {
                    href: ""
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.action.apply(null, arguments)
                    }
                }
            }, [n("span", {
                staticClass: "icon"
            }, [n("svg", {
                staticStyle: {
                    width: "20px"
                },
                attrs: {
                    width: "16",
                    height: "10",
                    viewBox: "0 0 16 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [n("path", {
                attrs: {
                    d: "M5.08366 8.75L1.33366 5M1.33366 5L5.08366 1.25M1.33366 5L14.667 5",
                    stroke: "#279B24",
                    "stroke-width": "1.8",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            })])]), t._v(" "), n("span", {
                staticClass: "font-w-600"
            }, [t._v(" Kembali")])])
        }
        ), [], !1, null, null, null);
        e.a = component.exports
    },
    760: function(t, e, n) {
        "use strict";
        n(18),
        n(17),
        n(16),
        n(22),
        n(23);
        var r = n(12)
          , l = (n(48),
        n(43),
        n(14));
        function o(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }
                ))),
                e.push.apply(e, n)
            }
            return e
        }
        function c(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? o(Object(source), !0).forEach((function(e) {
                    Object(r.a)(t, e, source[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : o(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }
                ))
            }
            return t
        }
        var d = {
            props: {
                class_type: {
                    type: String,
                    default: "groups"
                },
                group: {
                    type: Object,
                    required: !0
                }
            },
            computed: c(c({}, Object(l.d)({
                auth: function(t) {
                    return t.auth
                },
                account: function(t) {
                    return t.auth.active_pt
                }
            })), {}, {
                canAccessInteractiveVideo: function() {
                    return !this.isEmpty(this.auth.activeAccount) && !0 === this.auth.activeAccount.permissionNames.includes("can_access_interactive_video")
                },
                canAccessSesReport: function() {
                    return !this.isEmpty(this.auth.activeAccount) && !0 === this.auth.activeAccount.permissionNames.includes("can_access_ses_report")
                },
                tabs: function() {
                    var t = "ACADEMIC" === this.group.type ? "Pengajar" : "Pengelola"
                      , e = [{
                        path_name: "panel-".concat(this.class_type, "-id-info"),
                        path: "/panel/".concat(this.class_type, "/").concat(this.$route.params.id, "/info"),
                        name: "Informasi Kelas",
                        icon: "fa fa-info"
                    }, {
                        path_name: "panel-".concat(this.class_type, "-id"),
                        path: "/panel/".concat(this.class_type, "/").concat(this.$route.params.id),
                        name: "Diskusi",
                        icon: "fas fa-comments"
                    }, {
                        path_name: "panel-".concat(this.class_type, "-id-sections"),
                        path: "/panel/".concat(this.class_type, "/").concat(this.$route.params.id, "/sections"),
                        name: "Sesi Pembelajaran",
                        icon: "fas fa-tasks"
                    }, {
                        path_name: "panel-".concat(this.class_type, "-id-assignments"),
                        path: "/panel/".concat(this.class_type, "/").concat(this.$route.params.id, "/assignments"),
                        name: "Tugas"
                    }, {
                        path_name: "panel-".concat(this.class_type, "-id-quizes"),
                        path: "/panel/".concat(this.class_type, "/").concat(this.$route.params.id, "/quizes"),
                        name: "Kuis"
                    }];
                    return this.canAccessInteractiveVideo && e.push({
                        path_name: "panel-".concat(this.class_type, "-id-interactive_posts"),
                        path: "/panel/".concat(this.class_type, "/").concat(this.$route.params.id, "/interactive_posts"),
                        name: "Video Interaktif"
                    }),
                    e.push({
                        path_name: "panel-".concat(this.class_type, "-id-medias"),
                        path: "/panel/".concat(this.class_type, "/").concat(this.$route.params.id, "/medias"),
                        name: "Berkas"
                    }),
                    e.push({
                        path_name: "panel-".concat(this.class_type, "-id-classmate"),
                        path: "/panel/".concat(this.class_type, "/").concat(this.$route.params.id, "/classmate"),
                        name: "".concat(t, " & Anggota"),
                        icon: "fas fa-users"
                    }),
                    (!0 === ["O", "A"].includes(this.group.memberRole) || this.group.accessGroupTeam) && e.push({
                        path_name: "panel-".concat(this.class_type, "-id-groupteams"),
                        path: "/panel/".concat(this.class_type, "/").concat(this.$route.params.id, "/groupteams"),
                        name: "Kelompok",
                        icon: "fas fa-users"
                    }),
                    e.push({
                        path_name: "panel-".concat(this.class_type, "-id-report"),
                        path: "/panel/".concat(this.class_type, "/").concat(this.$route.params.id, "/report"),
                        name: "Laporan",
                        icon: "fas fa-chart-area",
                        roles: ["O", "A"]
                    }),
                    "classes" === this.class_type && !0 === ["O", "A"].includes(this.group.memberRole) && e.push({
                        path_name: "panel-".concat(this.class_type, "-id-report-ses_report"),
                        path: "/panel/".concat(this.class_type, "/").concat(this.$route.params.id, "/report/ses_report"),
                        name: "Student Engagement Score (SES)",
                        icon: "fas fa-chart-area",
                        roles: ["O", "A"]
                    }),
                    "classes" === this.class_type && this.canAccessSesReport && "M" === this.group.memberRole && e.push({
                        path_name: "panel-".concat(this.class_type, "-id-report-ses_report"),
                        path: "/panel/".concat(this.class_type, "/").concat(this.$route.params.id, "/report/ses_report"),
                        name: "Student Engagement Score (SES)",
                        icon: "fas fa-chart-area",
                        roles: ["M"]
                    }),
                    e
                }
            })
        }
          , m = n(4)
          , component = Object(m.a)(d, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("b-menu-list", t._l(t.tabs, (function(e, r) {
                return n("span", {
                    key: r
                }, [t.isEmpty(e.roles) || e.roles.indexOf(t.group.memberRole) > -1 || t.isAdmin && t.group.universityId == t.account.universityId ? n("b-menu-item", {
                    staticClass: "font-14 font-w-600 menu-item",
                    class: {
                        "has-background-greystroke": t.$route.name == e.path_name
                    },
                    staticStyle: {
                        padding: "7px 10px",
                        "border-radius": "8px"
                    },
                    attrs: {
                        tag: "nuxt-link",
                        to: e.path
                    }
                }, [n("template", {
                    slot: "label"
                }, [n("span", {
                    class: {
                        "has-text-darkblue": t.$route.name == e.path_name,
                        "has-text-primary2": t.$route.name != e.path_name
                    }
                }, [t._v(t._s(e.name))])])], 2) : t._e()], 1)
            }
            )), 0)
        }
        ), [], !1, null, null, null);
        e.a = component.exports
    },
    764: function(t, e, n) {
        "use strict";
        n(48),
        n(43);
        var r = n(0);
        e.a = {
            computed: {
                canOnlinePresence: function() {
                    return !this.isEmpty(this.auth.activeAccount) && !0 === this.auth.activeAccount.permissionNames.includes("can_online_presence")
                },
                canIntegrateGoogleMeet: function() {
                    return !this.isEmpty(this.auth.activeAccount) && !0 === this.auth.activeAccount.permissionNames.includes("can_integrate_google_meet")
                }
            },
            data: function() {
                return {
                    loading_get_learning_material: !1,
                    loading_save_desc: !1,
                    loading_save_video: !1,
                    loading_save_document: !1,
                    loading_save_title: !1,
                    loading_save_image: !1
                }
            },
            methods: {
                onGetLearningMaterial: function(data) {},
                getLearningMaterial: function(t) {
                    var e = this
                      , n = this;
                    n.loading_get_learning_material = !0,
                    this.$axios.post(r.v.GET_DETAIL(t)).then((function(t) {
                        var data = t.data;
                        0 == data.applicationSystem.code ? e.onGetLearningMaterial(data.data) : toast.danger(data.applicationSystem.message),
                        n.loading_get_learning_material = !1
                    }
                    )).catch((function() {
                        n.loading_get_learning_material = !1
                    }
                    ))
                },
                setLoadingOff: function() {
                    this.loading_save_desc = !1,
                    this.loading_save_video = !1,
                    this.loading_save_document = !1,
                    this.loading_save_title = !1
                },
                saveLearningMaterial: function(t, data) {
                    var e = this
                      , n = this;
                    if (!n.loading_save_title) {
                        var l = !0;
                        return this.isEmpty(data) || this.isEmpty(data.showToast) || (l = !1,
                        delete data.showToast),
                        n.loading_save_title = !0,
                        this.$axios.post(r.v.UPDATE(this.learning_material.id), data).then((function(t) {
                            var data = t.data;
                            return 0 == data.applicationSystem.code ? (l && toast.default(data.applicationSystem.message),
                            n.onSavedLearningMaterial(data.data)) : (toast.danger(data.applicationSystem.message),
                            n.onNotSavedLearningMaterial(data)),
                            n.loading_save_title = !1,
                            e.setLoadingOff(),
                            data
                        }
                        )).catch((function() {
                            e.setLoadingOff(),
                            n.loading_save_title = !1
                        }
                        ))
                    }
                },
                onSavedLearningMaterial: function() {},
                onNotSavedLearningMaterial: function() {},
                deleteLearningMaterial: function(t) {
                    var e = this
                      , n = this;
                    this.$buefy.dialog.confirm({
                        title: "Hapus Materi",
                        message: "Aksi ini akan menghapus materi beserta berkas - berkas di dalamnya, lanjutkan?",
                        confirmText: "Ya",
                        cancelText: "Batal",
                        type: "is-danger",
                        hasIcon: !0,
                        onConfirm: function() {
                            e.$axios.post(r.v.DELETE(t)).then((function(t) {
                                var data = t.data;
                                0 == data.applicationSystem.code ? n.onDeletedLearningMaterial(data.data) : (toast.danger(data.applicationSystem.message),
                                n.onFailDeleteLearningMaterial())
                            }
                            )).catch((function() {}
                            ))
                        }
                    })
                },
                onDeletedLearningMaterial: function() {},
                onFailDeleteLearningMaterial: function() {},
                onLearningMaterialCopiedSuccess: function() {},
                onLearningMaterialCopiedFailed: function() {
                    var data = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    this.isEmpty(data) || this.$buefy.toast.open({
                        message: data.applicationSystem.message,
                        type: "is-danger"
                    })
                },
                copyLearningMaterial: function(t, e, n) {
                    var l = this;
                    this.$axios.post(r.v.DUPLICATE(t), {
                        group_id: e,
                        section_ids: n
                    }).then((function(t) {
                        var data = t.data;
                        0 == data.applicationSystem.code ? l.onLearningMaterialCopiedSuccess(data) : l.onLearningMaterialCopiedFailed(data)
                    }
                    )).catch((function() {
                        l.onLearningMaterialCopiedFailed()
                    }
                    ))
                },
                onAllLearningMaterialCopiedSuccess: function() {},
                onAllLearningMaterialCopiedFailed: function(data) {
                    this.isEmpty(data) || this.$buefy.toast.open({
                        message: data.applicationSystem.message,
                        type: "is-danger"
                    })
                },
                copyAllLearningMaterial: function(t, e, n) {
                    var l = this;
                    l.$axios.post(r.v.DUPLICATE_ALL, {
                        group_id: t,
                        source_section_id: e,
                        destination_section_ids: n
                    }).then((function(t) {
                        var data = t.data;
                        0 == data.applicationSystem.code ? l.onAllLearningMaterialCopiedSuccess(data) : l.onAllLearningMaterialCopiedFailed(data)
                    }
                    )).catch((function() {
                        l.onAllLearningMaterialCopiedFailed()
                    }
                    ))
                }
            }
        }
    },
    770: function(t, e, n) {
        "use strict";
        e.a = {
            head: function() {
                return {
                    title: this.seo.title,
                    meta: [{
                        hid: "title",
                        name: "title",
                        content: this.seo.title
                    }, {
                        hid: "description",
                        name: "description",
                        content: this.getExcerpt()
                    }, {
                        property: "og:type",
                        content: "website"
                    }, {
                        property: "og:url",
                        content: this.getUrl()
                    }, {
                        property: "og:title",
                        content: this.seo.title
                    }, {
                        property: "og:description",
                        content: this.getExcerpt()
                    }, {
                        property: "og:image",
                        content: this.getCover()
                    }, {
                        property: "twitter:card",
                        content: "summary_large_image"
                    }, {
                        property: "twitter:url",
                        content: this.getUrl()
                    }, {
                        property: "twitter:title",
                        content: this.seo.title
                    }, {
                        property: "twitter:description",
                        content: this.getExcerpt()
                    }, {
                        property: "twitter:image",
                        content: this.getCover()
                    }]
                }
            },
            methods: {
                getCover: function() {
                    return this.isEmpty(this.seo.cover) ? "" : this.seo.cover
                },
                getExcerpt: function() {
                    return this.isEmpty(this.seo.excerpt) ? "" : this.seo.excerpt
                },
                getUrl: function() {
                    var t = window.location.host;
                    return "A" == this.seo.group.type ? "http://".concat(t) + "/panel/classes/".concat(this.seo.groupId, "/sections/").concat(this.seo.classScheduleId) : "" == this.seo.group.type ? "http://".concat(t) + "/panel/groups/".concat(this.seo.groupId, "/sections/").concat(this.seo.classScheduleId) : ""
                }
            }
        }
    },
    779: function(t, e, n) {},
    780: function(t, e, n) {
        "use strict";
        var r = n(0)
          , l = {
            mounted: function() {
                this.getSections()
            },
            props: {
                group: {
                    type: Object,
                    required: !0
                },
                progress: {
                    type: Object,
                    default: null
                }
            },
            computed: {
                progressBySectionId: function() {
                    return this.isEmpty(this.progress) ? null : collect(this.progress.sectionsProgress).keyBy("id").all()
                }
            },
            data: function() {
                return {
                    sections: [],
                    show_materials: !1,
                    loading_get_sections: !1,
                    menu_index: null
                }
            },
            methods: {
                getSections: function() {
                    var t = this;
                    t.loading_get_sections || (t.loading_get_sections = !0,
                    this.$axios.post(r.T.GET_ALL(this.group.id)).then((function(e) {
                        var data = e.data;
                        if (0 == data.applicationSystem.code) {
                            t.sections = data.data;
                            for (var s = 0; s < data.data.length; s++) {
                                var section = data.data[s];
                                if (!t.isEmpty(t.$route.params.section_id) && t.$route.params.section_id == section.id) {
                                    t.menu_index = s;
                                    break
                                }
                            }
                        }
                        t.loading_get_sections = !1
                    }
                    )).catch((function() {
                        t.loading_get_sections = !1
                    }
                    )))
                }
            }
        }
          , o = (n(802),
        n(4))
          , component = Object(o.a)(l, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                class: {
                    "box is-paddingless is-boxed-3": !t.isEmpty(t.sections)
                },
                style: t.isEmpty(t.sections) ? "" : "overflow-y: auto; overflow-x: hidden; max-height: 500px;"
            }, t._l(t.sections, (function(section, e) {
                return t.loading_get_sections || t.isEmpty(t.sections) ? t.loading_get_sections ? n("spinner-loading", {
                    staticStyle: {
                        margin: "10px 0"
                    },
                    attrs: {
                        text: "Memuat..."
                    }
                }) : t._e() : n("b-collapse", {
                    key: e,
                    style: t.sections.length > e + 1 ? "border-bottom: 1px solid #E2E7FF;" : "",
                    attrs: {
                        animation: "slide",
                        open: !t.isEmpty(t.menu_index) && e == t.menu_index
                    },
                    on: {
                        open: function(n) {
                            t.menu_index = e
                        }
                    },
                    scopedSlots: t._u([{
                        key: "trigger",
                        fn: function(e) {
                            return [n("div", {
                                staticClass: "card-header",
                                staticStyle: {
                                    "box-shadow": "none"
                                },
                                attrs: {
                                    role: "button"
                                }
                            }, [n("div", {
                                staticClass: "card-header-title",
                                staticStyle: {
                                    padding: "16px"
                                }
                            }, ["M" == t.group.memberRole ? n("div", {
                                staticStyle: {
                                    "margin-right": "12px"
                                }
                            }, [t.isEmpty(t.progressBySectionId) || t.isEmpty(t.progressBySectionId[section.id]) || 1 != t.progressBySectionId[section.id].ispass ? n("svg", {
                                attrs: {
                                    width: "14",
                                    height: "15",
                                    viewBox: "0 0 14 15",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg"
                                }
                            }, [n("path", {
                                attrs: {
                                    d: "M7 0.5C3.14047 0.5 0 3.64047 0 7.5C0 11.3595 3.14047 14.5 7 14.5C10.8595 14.5 14 11.3595 14 7.5C14 3.64047 10.8595 0.5 7 0.5ZM10.5481 6.01682L6.75668 9.8082C6.64304 9.92206 6.49329 9.97888 6.3446 9.97888C6.19507 9.97888 6.04617 9.92206 5.93253 9.8082L4.03641 7.91208C3.8089 7.68457 3.8089 7.31543 4.03641 7.08707C4.26392 6.8587 4.63306 6.85956 4.86142 7.08707L6.3446 8.57004L9.72391 5.19095C9.95142 4.96344 10.3206 4.96344 10.5489 5.19095C10.7773 5.41846 10.7756 5.78845 10.5481 6.01682Z",
                                    fill: "#E2E7FF"
                                }
                            })]) : n("svg", {
                                attrs: {
                                    width: "14",
                                    height: "15",
                                    viewBox: "0 0 14 15",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg"
                                }
                            }, [n("path", {
                                attrs: {
                                    d: "M7 0.5C3.14047 0.5 0 3.64047 0 7.5C0 11.3595 3.14047 14.5 7 14.5C10.8595 14.5 14 11.3595 14 7.5C14 3.64047 10.8595 0.5 7 0.5ZM10.5481 6.01682L6.75668 9.8082C6.64304 9.92206 6.49329 9.97888 6.3446 9.97888C6.19507 9.97888 6.04617 9.92206 5.93253 9.8082L4.03641 7.91208C3.8089 7.68457 3.8089 7.31543 4.03641 7.08707C4.26392 6.8587 4.63306 6.85956 4.86142 7.08707L6.3446 8.57004L9.72391 5.19095C9.95142 4.96344 10.3206 4.96344 10.5489 5.19095C10.7773 5.41846 10.7756 5.78845 10.5481 6.01682Z",
                                    fill: "#279B24"
                                }
                            })])]) : t._e(), t._v(" "), n("div", {
                                staticClass: "is-block"
                            }, [n("p", {
                                staticClass: "subtitle font-12 has-text-primary2"
                            }, [t._v("Sesi " + t._s(section.meet))]), t._v(" "), n("p", {
                                staticClass: "title font-14 font-w-600 has-text-darkblue"
                            }, [t.isEmpty(section.topic) ? n("span", [t._v("- Tidak ada topic -")]) : n("span", [t._v(t._s(section.topic))])])])]), t._v(" "), n("a", {
                                staticClass: "card-header-icon has-text-primary2",
                                staticStyle: {
                                    padding: "16px"
                                }
                            }, [n("b-icon", {
                                attrs: {
                                    icon: e.open ? "chevron-up" : "chevron-down"
                                }
                            })], 1)])]
                        }
                    }], null, !0)
                }, [t._v(" "), n("div", {
                    staticClass: "card-content has-background-primary4",
                    staticStyle: {
                        padding: "5px 0"
                    }
                }, [n("ul", t._l(section.materials, (function(e, r) {
                    return n("li", {
                        key: r,
                        staticStyle: {
                            padding: "6px 18px"
                        }
                    }, [n("nuxt-link", {
                        class: {
                            "has-background-greystroke": t.$route.params.learningmaterial_id == e.id,
                            "has-text-primary2": t.$route.params.learningmaterial_id == e.id
                        },
                        attrs: {
                            to: {
                                name: "panel-" + ("ACADEMIC" == t.group.type ? "classes" : "groups") + "-id-sections-section_id-learningmaterial_id",
                                params: {
                                    id: t.$route.params.id,
                                    section_id: section.id,
                                    learningmaterial_id: e.id
                                }
                            }
                        }
                    }, [n("div", {
                        staticClass: "columns is-vcentered is-gapless"
                    }, [n("div", {
                        staticClass: "column is-narrow",
                        staticStyle: {
                            "margin-right": "9px"
                        }
                    }, [n("svg", {
                        staticStyle: {
                            "margin-top": "7px"
                        },
                        attrs: {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M7.70367 14.7846L8.1134 12.7368C8.13173 12.6479 8.17481 12.5663 8.23898 12.5022L12.7442 7.99694C13.1484 7.5927 13.8066 7.59362 14.2108 7.99694L15.0303 8.81641C15.4345 9.22064 15.4345 9.87878 15.0303 10.2839L10.525 14.7892C10.4609 14.8533 10.3793 14.8973 10.2913 14.9147L8.24356 15.3245C7.91907 15.3877 7.64042 15.1027 7.70367 14.7846Z",
                            fill: "#7985CB"
                        }
                    }), t._v(" "), n("path", {
                        attrs: {
                            d: "M10.4444 3.11131H9.83297V1.27805C9.83297 0.941652 9.55798 0.666664 9.22158 0.666664H2.49994C1.99855 0.666664 1.53473 0.874739 1.20475 1.20472C0.874761 1.53471 0.666687 1.99303 0.666687 2.49992V12.2776C0.666687 13.2859 1.49165 14.1108 2.49994 14.1108H6.5881L6.91167 12.4976C6.97859 12.1676 7.14358 11.8679 7.3764 11.636L11.0548 7.95753V3.7227C11.0548 3.3863 10.7798 3.11131 10.4444 3.11131ZM8.6111 3.11131H2.49994C2.16354 3.11131 1.88855 2.83632 1.88855 2.49992C1.88855 2.16352 2.16354 1.88853 2.49994 1.88853H8.6111V3.11131Z",
                            fill: "#7985CB"
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "column"
                    }, [n("span", {
                        staticClass: "font-12"
                    }, [t._v(t._s(e.title))])])])])], 1)
                }
                )), 0)])])
            }
            )), 1)
        }
        ), [], !1, null, null, null);
        e.a = component.exports
    },
    786: function(t, e, n) {},
    802: function(t, e, n) {
        "use strict";
        n(779)
    },
    812: function(t, e, n) {
        "use strict";
        var r = {}
          , l = n(4)
          , component = Object(l.a)(r, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "box is-boxed-3 has-background-greystroke has-text-darkblue",
                staticStyle: {
                    border: "1px solid #CCD0EB",
                    "margin-bottom": "20px"
                }
            }, [n("div", {
                staticClass: "columns is-gapless"
            }, [n("div", {
                staticClass: "column is-narrow",
                staticStyle: {
                    "margin-right": "10px",
                    "margin-top": "2px"
                }
            }, [n("svg", {
                attrs: {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [n("path", {
                attrs: {
                    d: "M12 0C5.38367 0 0 5.38367 0 12C0 18.6163 5.38367 24 12 24C18.6163 24 24 18.6163 24 12C24 5.38367 18.6163 0 12 0ZM12 19.0005C11.4481 19.0005 10.9995 18.5533 10.9995 18C10.9995 17.4481 11.4467 16.9995 12 16.9995C12.5519 16.9995 13.0005 17.4467 13.0005 18C13.0005 18.5519 12.5519 19.0005 12 19.0005ZM13.0005 13.9995C13.0005 14.5529 12.5519 15 12 15C11.4481 15 10.9995 14.5514 10.9995 13.9995V6C10.9995 5.44812 11.4481 4.99951 12 4.99951C12.5519 4.99951 13.0005 5.44812 13.0005 6V13.9995Z",
                    fill: "#7985CB"
                }
            })])]), t._v(" "), t._m(0)])])
        }
        ), [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "column"
            }, [n("p", {
                staticClass: "font-16 font-w-600"
            }, [t._v("Edit kuis dibatasi.")]), t._v(" "), n("p", {
                staticClass: "font-14"
            }, [t._v("Edit dibatasi karena kuis telah dikerjakan oleh mahasiswa. Perubahan hanya dapat dilakukan pada beberapa pengaturan.")])])
        }
        ], !1, null, null, null);
        e.a = component.exports
    },
    813: function(t, e, n) {
        "use strict";
        n(786)
    },
    833: function(t, e, n) {
        "use strict";
        n(18),
        n(17),
        n(22),
        n(23);
        var r = n(9)
          , l = n(12)
          , o = (n(19),
        n(26),
        n(60),
        n(31),
        n(42),
        n(16),
        n(53),
        n(14))
          , c = n(0)
          , d = n(102)
          , m = n(73)
          , _ = n(855)
          , v = n(105)
          , h = n(213)
          , f = n(838)
          , y = {
            props: {
                isShow: {
                    type: Boolean,
                    required: !0
                },
                isLoading: {
                    type: Boolean,
                    default: !1
                },
                onCancel: {
                    type: Function,
                    required: !0
                },
                onAgree: {
                    type: Function,
                    required: !0
                }
            }
        }
          , C = n(4)
          , k = Object(C.a)(y, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("b-modal", {
                attrs: {
                    active: t.isShow,
                    "can-cancel": !1,
                    width: 446
                },
                on: {
                    "update:active": function(e) {
                        t.isShow = e
                    }
                }
            }, [n("div", {
                staticClass: "box is-boxed-3 has-text-centered"
            }, [n("p", {
                staticClass: "font-20 font-w-600 has-text-darkblue"
            }, [t._v("Anda akan mengumpulkan kuis")]), t._v(" "), n("p", {
                staticClass: "font-16 font-w-400 has-text-darkblue",
                staticStyle: {
                    "margin-top": "12px",
                    "margin-bottom": "28px"
                }
            }, [t._v("\n      Kumpulkan pengerjaan kuis, dan lihat nilai hasil pengerjaan Anda.\n    ")]), t._v(" "), n("div", {
                staticClass: "columns is-dekstop is-mobile is-tablet is-vcentered"
            }, [n("div", {
                staticClass: "column is-6"
            }, [n("button", {
                staticClass: "button is-default is-fullwidth",
                class: {
                    "is-loading": t.isLoading
                },
                staticStyle: {
                    background: "#E2E7FF",
                    border: "1px solid #E2E7FF",
                    "border-radius": "6px",
                    height: "51px"
                },
                attrs: {
                    disabled: t.isLoading
                },
                on: {
                    click: t.onCancel
                }
            }, [n("span", {
                staticClass: "font-16 font-w-500 has-text-primary2"
            }, [t._v("Batal")])])]), t._v(" "), n("div", {
                staticClass: "column is-6"
            }, [n("button", {
                staticClass: "button is-primary is-fullwidth",
                class: {
                    "is-loading": t.isLoading
                },
                staticStyle: {
                    "border-radius": "6px",
                    height: "51px"
                },
                attrs: {
                    disabled: t.isLoading
                },
                on: {
                    click: t.onAgree
                }
            }, [n("span", {
                staticClass: "font-16 font-w-700"
            }, [t._v("Ya, Kumpulkan")])])])])])])
        }
        ), [], !1, null, null, null).exports
          , x = {
            props: {
                isShow: {
                    type: Boolean,
                    required: !0
                },
                isLoading: {
                    type: Boolean,
                    default: !1
                },
                onContinue: {
                    type: Function,
                    required: !0
                },
                onSubmit: {
                    type: Function,
                    required: !0
                }
            }
        }
          , w = Object(C.a)(x, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("b-modal", {
                attrs: {
                    active: t.isShow,
                    "can-cancel": !1,
                    width: 446
                },
                on: {
                    "update:active": function(e) {
                        t.isShow = e
                    }
                }
            }, [n("div", {
                staticClass: "box is-boxed-3 has-text-centered"
            }, [n("p", {
                staticClass: "font-20 font-w-600 has-text-darkblue"
            }, [t._v("Waktu pengerjaan hampir habis")]), t._v(" "), n("p", {
                staticClass: "font-16 font-w-400 has-text-darkblue",
                staticStyle: {
                    "margin-top": "12px",
                    "margin-bottom": "28px"
                }
            }, [t._v("\n      Sisa waktu kurang dari 1 menit."), n("br"), t._v("Tetap lanjutkan pengerjaan kuis?\n    ")]), t._v(" "), n("div", {
                staticClass: "columns is-dekstop is-mobile is-tablet is-vcentered"
            }, [n("div", {
                staticClass: "column is-6"
            }, [n("button", {
                staticClass: "button is-default is-fullwidth",
                class: {
                    "is-loading": t.isLoading
                },
                staticStyle: {
                    background: "#E2E7FF",
                    border: "1px solid #E2E7FF",
                    "border-radius": "6px",
                    height: "51px"
                },
                attrs: {
                    disabled: t.isLoading
                },
                on: {
                    click: t.onContinue
                }
            }, [n("span", {
                staticClass: "font-16 font-w-500 has-text-primary2"
            }, [t._v("Lanjutkan Kuis")])])]), t._v(" "), n("div", {
                staticClass: "column is-6"
            }, [n("button", {
                staticClass: "button is-primary is-fullwidth",
                class: {
                    "is-loading": t.isLoading
                },
                staticStyle: {
                    "border-radius": "6px",
                    height: "51px"
                },
                attrs: {
                    disabled: t.isLoading
                },
                on: {
                    click: t.onSubmit
                }
            }, [n("span", {
                staticClass: "font-16 font-w-700"
            }, [t._v("Kumpulkan")])])])])])])
        }
        ), [], !1, null, null, null).exports
          , z = n(857);
        function S(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }
                ))),
                e.push.apply(e, n)
            }
            return e
        }
        function E(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? S(Object(source), !0).forEach((function(e) {
                    Object(l.a)(t, e, source[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : S(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }
                ))
            }
            return t
        }
        var M = {
            mixins: [d.a],
            components: {
                vcountdown: m.a,
                ResultQuiz: _.a,
                VideoManager: v.a,
                CommentBox: h.a,
                QuizSameDeviceConfirmation: f.a,
                QuizTimeoutConfirmation: k,
                QuizInjuryTimeConfirmation: w,
                InteractivePlayground: z.a
            },
            props: {
                group: {
                    type: Object,
                    required: !0
                },
                learning_material: {
                    type: Object,
                    required: !0
                },
                bgwhite: {
                    type: Boolean,
                    default: !0
                }
            },
            mounted: function() {
                this.getQuizResult(),
                "H" === this.learning_material.type && this.getInteractiveVideoDetail(),
                this.track("learning_material", "view_detail_learning_material", this.learning_material.id, "gm", this.group.memberId),
                this.$store.commit("quizes/setSameDevice", {
                    key: "showWarning",
                    value: !1
                }),
                this.$store.commit("quizes/setSameDevice", {
                    key: "uuid",
                    value: null
                }),
                this.$store.commit("quizes/setSameDevice", {
                    key: "quizMemberUuid",
                    value: null
                }),
                "H" == this.learning_material.type && $(window).on("beforeunload", (function() {
                    return ""
                }
                ))
            },
            computed: E(E({}, Object(o.d)({
                loading_start_quiz: function(t) {
                    return t.quizes.loading_start_quiz
                },
                account: function(t) {
                    return t.auth.active_pt
                }
            })), {}, {
                videos: function() {
                    return collect(this.learning_material.medias).whereIn("type", ["video", "youtube"]).toArray()
                },
                images: function() {
                    return collect(this.learning_material.medias).where("type", "image").toArray()
                },
                documents: function() {
                    return collect(this.learning_material.medias).where("type", "document").toArray()
                },
                documents_and_others: function() {
                    return collect(this.learning_material.medias).whereIn("type", ["other", "document"]).toArray()
                },
                carousel_items: function() {
                    var t = this
                      , e = this.learning_material;
                    return this.isEmpty(e) || this.isEmpty(this.images) ? [] : collect(this.images).map((function(e) {
                        return {
                            type: e.type,
                            link_source: t.isEmpty(e.images) || t.isEmpty(e.images.original) || t.isEmpty(e.images.original.link) || null != e.storageType ? "google_drive" == e.storageType ? e.values.thumbnailLink : "" : e.images.original.link,
                            link_thumb: t.isEmpty(e.images) || t.isEmpty(e.images.original) || t.isEmpty(e.images.original.link) || null != e.storageType ? "google_drive" == e.storageType ? e.values.thumbnailLink : "" : e.images.original.link
                        }
                    }
                    )).toArray()
                },
                carousel_video: function() {
                    var t = this
                      , e = this.learning_material;
                    return this.isEmpty(e) || this.isEmpty(this.videos) ? [] : collect(this.videos).filter((function(t) {
                        return "video" == t.type || "youtube" == t.type
                    }
                    )).map((function(e) {
                        return "youtube" == e.type ? {
                            type: e.type,
                            link_source: e.link,
                            youtubeId: e.ref.youtubeId
                        } : "video" == e.type ? {
                            type: e.type,
                            link_source: "google_drive" == e.storageType ? e.values.downloadLink : t.isEmpty(e.file) ? null : e.file.link,
                            mime: e.mime
                        } : void 0
                    }
                    )).toArray()
                },
                canStartQuiz: function() {
                    return 1 == this.learning_material.quiz.status && this.isEmpty(this.result)
                },
                canRetakeQuiz: function() {
                    return this.learning_material.quiz.isRetakeable && !this.isEmpty(this.result) && this.learning_material.quiz.maxRetake - this.result.quizTakedCount > 0 && !this.isEmpty(this.learning_material.quiz.gradeLimit) && this.result.totalScore < this.learning_material.quiz.gradeLimit && this.quizRetakeAvailable
                },
                canContinueAnswerQuiz: function() {
                    return !this.isEmpty(this.result) && 0 === this.result.submittedAt
                },
                autoDeleteRecordingDate: function() {
                    var t;
                    if (null !== (t = this.learning_material) && void 0 !== t && t.meetStarted) {
                        var e = moment(this.learning_material.meetStarted);
                        return e.isBefore("2023-03-29T16:40:00+07:00") ? e.add(2, "days").format("Do MMMM YYYY") : e.add(1, "month").format("Do MMMM YYYY")
                    }
                }
            }),
            data: function() {
                return {
                    collapsed_quiz_report: !0,
                    result: null,
                    loading_get_result: !1,
                    selected_media: null,
                    counterDoc: 0,
                    counterDocInterval: null,
                    counterVideo: 0,
                    counterVideoInterval: null,
                    questions: [],
                    quizRetakeAvailable: !1,
                    showQuizButton: !1,
                    quizStartedAt: null,
                    quizEndedAt: null,
                    quizProgress: null,
                    quizDistance: 0,
                    quizTimerLoading: !1,
                    quizDays: "00",
                    quizHours: "00",
                    quizMinutes: "00",
                    quizSeconds: "00",
                    finishQuizLoading: !1,
                    quizTimeoutConfirmationShow: !1,
                    quizInjuryTimeConfirmationShow: !1,
                    loading_redirect_report: !1,
                    interactive_questions: [],
                    show_modal_interactive_video: !1,
                    show_confirm_unload_interactive_video: !1
                }
            },
            methods: E(E({}, Object(o.b)({
                startQuiz: "quizes/startQuiz"
            })), {}, {
                downloadPostMedia: function(t) {
                    var e = this;
                    return Object(r.a)(regeneratorRuntime.mark((function n() {
                        return regeneratorRuntime.wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    e.download(t, e.group.id);
                                case 2:
                                    e.track("post", "download_media", e.learning_material.id, "gm", e.group.memberId, {
                                        media_id: t.id
                                    });
                                case 3:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )))()
                },
                getPathSection: function() {
                    var t = "ACADEMIC" == this.group.type ? "classes" : "groups";
                    return "/panel/".concat(t, "/").concat(this.group.id, "/sections/").concat(this.$route.params.section_id)
                },
                getInteractiveVideoDetail: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n, data;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if ("H" === t.learning_material.type) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4,
                                    t.$axios.post(c.t.DETAIL(t.learning_material.id));
                                case 4:
                                    n = e.sent,
                                    0 == (data = n.data).applicationSystem.code && (t.interactive_questions = data.data.interactivePost.questions);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                getQuizResult: function() {
                    var t = this
                      , e = this;
                    this.isEmpty(this.learning_material.quiz) || (e.loading_get_result = !0,
                    this.$axios.post(c.K.GET_GRADE(this.learning_material.quiz.id)).then((function(n) {
                        var data = n.data;
                        0 == data.applicationSystem.code && (e.showQuizButton = !0,
                        e.result = data.data,
                        !t.isEmpty(t.learning_material.quiz) && t.learning_material.quiz.showReportToMembers && (!t.learning_material.quiz.isRetakeable && 2 == t.learning_material.quiz.status || t.learning_material.quiz.isRetakeable && !t.isEmpty(t.learning_material.quiz.gradeLimit) && t.result.totalScore >= t.learning_material.quiz.gradeLimit) && t.getQuizQuestions(t.learning_material.quiz.id),
                        t.quizStartedAt = null,
                        t.quizEndedAt = null,
                        t.isEmpty(data.data) || (t.quizRetakeAvailable = t.learning_material.quiz.isRetakeable && t.isPast(t._moment(t.result.lastFinishedTest).add(t.learning_material.quiz.pauseRetake, "seconds").format("YYYY-MM-DD HH:mm:ss")),
                        t.quizStartedAt = data.data.startedAt,
                        t.quizEndedAt = data.data.endedAt,
                        t.startQuizTimer())),
                        e.loading_get_result = !1
                    }
                    )).catch((function() {
                        e.loading_get_result = !1
                    }
                    )))
                },
                showPreview: function(t) {
                    ["document", "link"].indexOf(t.type) > -1 && ("link" != t.type || this.isEmpty(t.link) ? "document" != t.type || "google_drive" != t.storageType || this.isEmpty(t.values) ? "document" != t.type || this.isEmpty(t.file) || this.isEmpty(t.file.link) || this.openDocument(t.file.link) : window.open(t.values.webViewLink, "_blank") : window.open(t.link, "_blank"))
                },
                hidePreview: function() {
                    this.selected_media = null
                },
                onVideoPlaying: function(t) {
                    var e = this;
                    e.counterVideoInterval = setInterval((function() {
                        e.counterVideo = e.counterVideo + 1
                    }
                    ), 1e3)
                },
                onVideoPaused: function(t, e) {
                    clearInterval(this.counterVideoInterval),
                    this.counterVideoInterval = null,
                    this.track("learning_material", "long_time_to_see_video_learning_material", this.learning_material.id, "gm", this.group.memberId, {
                        value: this.counterVideo,
                        duration: Math.round(e)
                    })
                },
                onVideoBuffer: function() {
                    clearInterval(this.counterVideoInterval),
                    this.counterVideoInterval = null
                },
                onVideoEnded: function(t, e) {
                    var n = this;
                    clearInterval(n.counterVideoInterval),
                    n.counterVideoInterval = null,
                    this.track("learning_material", "long_time_to_see_video_learning_material", this.learning_material.id, "gm", this.group.memberId, {
                        value: this.counterVideo,
                        duration: Math.round(e)
                    }),
                    n.counterVideo = 0
                },
                onGetQuizQuestionsSuccess: function(t) {
                    this.questions = t.data
                },
                onQuizAvailabled: function() {
                    this.quizRetakeAvailable = !0
                },
                playQuiz: function(t) {
                    this.$store.commit("quizes/setLoading", {
                        key: "loading_start_quiz",
                        val: !0
                    }),
                    t.quiz.cameraTrack ? this.$router.push({
                        path: "/panel/quiz-tnc-read",
                        query: {
                            lmid: t.id
                        }
                    }) : this.startQuiz(t.quiz.id)
                },
                checkIsConfirmationNeeded: function(t) {
                    this.quizProgress <= 0 && !this.isEmpty(this.learning_material.quiz.duration) ? this.quizTimeoutConfirmationShow = !0 : this.quizProgress > 0 && 0 == parseInt(this.quizHours) && 0 == parseInt(this.quizMinutes) && parseInt(this.quizSeconds) < 60 ? this.quizInjuryTimeConfirmationShow = !0 : this.playQuiz(t)
                },
                startQuizTimer: function() {
                    var t = this
                      , e = 1e3 * this.quizStartedAt
                      , n = 1e3 * this.quizEndedAt;
                    this.quizTimerLoading = !0;
                    var r = n - e
                      , l = setInterval((function() {
                        var e = moment().valueOf()
                          , o = n - e
                          , c = Math.floor(o / 864e5)
                          , d = Math.floor(o % 864e5 / 36e5)
                          , m = Math.floor(o % 36e5 / 6e4)
                          , _ = Math.floor(o % 6e4 / 1e3);
                        t.quizProgress = o / r * 100,
                        t.quizDistance = o,
                        o <= 0 ? (clearInterval(l),
                        t.quizProgress = 0) : (t.quizDays = "0".concat(c).slice(-2),
                        t.quizHours = "0".concat(d).slice(-2),
                        t.quizMinutes = "0".concat(m).slice(-2),
                        t.quizSeconds = "0".concat(_).slice(-2)),
                        t.quizTimerLoading && (t.quizTimerLoading = !1)
                    }
                    ), 500)
                },
                finishQuiz: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n, data;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.finishQuizLoading) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return t.finishQuizLoading = !0,
                                    e.prev = 3,
                                    e.next = 6,
                                    t.$axios.post(c.K.FINISH_QUIZ(t.learning_material.quiz.uuid, t.result.quizMemberUuid), {}, {
                                        headers: {
                                            "x-gmid": t.group.memberId
                                        }
                                    });
                                case 6:
                                    n = e.sent,
                                    0 == (data = n.data).applicationSystem.code ? (toast.success("Pengumpulan quiz berhasil"),
                                    t.getQuizResult()) : toast.danger(data.applicationSystem.message),
                                    t.finishQuizLoading = !1,
                                    t.quizTimeoutConfirmationShow = !1,
                                    t.quizInjuryTimeConfirmationShow = !1,
                                    e.next = 17;
                                    break;
                                case 14:
                                    e.prev = 14,
                                    e.t0 = e.catch(3),
                                    setTimeout((function() {
                                        toast.danger("Terjadi kesalahan saat pengumpulan quiz. Silakan ulangi beberapa saat lagi"),
                                        t.finishQuizLoading = !1
                                    }
                                    ), 1e3);
                                case 17:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[3, 14]])
                    }
                    )))()
                },
                toQuizReport: function() {
                    this.loading_redirect_report || (this.loading_redirect_report = !0,
                    this.$router.push("/quiz/".concat(this.learning_material.quiz.uuid, "?quizMemberUuid=").concat(this.result.quizMemberUuid, "&success=1&review=1")))
                }
            })
        }
          , D = (n(1039),
        Object(C.a)(M, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [t.isEmpty(t.learning_material) ? t._e() : n("div", [["M", "Q", "Z", "H"].indexOf(t.learning_material.type) > -1 ? n("div", [t.isEmpty(t.images) ? t._e() : n("div", {
                staticClass: "card is-boxed",
                class: {
                    "is-bg": !t.bgwhite
                },
                staticStyle: {
                    "margin-bottom": "15px"
                }
            }, [t._m(0), t._v(" "), n("div", {
                staticClass: "card-content"
            }, [n("custom-carousel", {
                staticStyle: {
                    margin: "0"
                },
                attrs: {
                    items: t.carousel_items
                }
            })], 1)]), t._v(" "), t.isEmpty(t.videos) || "H" === t.learning_material.type ? t._e() : n("div", {
                staticClass: "card is-boxed",
                class: {
                    "is-bg": !t.bgwhite
                },
                staticStyle: {
                    "margin-bottom": "15px"
                }
            }, [t._m(1), t._v(" "), n("div", {
                staticClass: "card-content"
            }, [n("video-manager", {
                attrs: {
                    videos: t.videos,
                    onPlaying: t.onVideoPlaying,
                    onPaused: t.onVideoPaused,
                    onBuffer: t.onVideoBuffer,
                    onEnded: t.onVideoEnded
                }
            })], 1)]), t._v(" "), t.isEmpty(t.documents_and_others) ? t._e() : n("div", {
                staticClass: "card is-boxed",
                class: {
                    "is-bg": !t.bgwhite
                },
                staticStyle: {
                    "margin-bottom": "15px"
                }
            }, [t._m(2), t._v(" "), n("div", {
                staticClass: "card-content"
            }, [n("div", {
                staticClass: "middle-content"
            }, [n("div", {
                staticClass: "tugas__content-timeline"
            }, [n("div", {
                staticClass: "content",
                staticStyle: {
                    padding: "0",
                    border: "none",
                    margin: "0"
                }
            }, [n("div", {
                staticClass: "keterangan",
                staticStyle: {
                    margin: "0",
                    width: "100%"
                }
            }, t._l(t.documents_and_others, (function(e, r) {
                return n("div", {
                    key: r,
                    staticClass: "file-download",
                    staticStyle: {
                        padding: "5px 0.65rem 5px 0"
                    },
                    style: 0 == r ? "margin-top: 0 !important;" : "margin-top: 7px !important;"
                }, [n("span", [t._v("\n                        "), n("icon-collection", {
                    attrs: {
                        media: e,
                        size: "is-24x24"
                    }
                }), t._v(" "), n("a", {
                    attrs: {
                        href: ""
                    },
                    on: {
                        click: function(n) {
                            return n.preventDefault(),
                            t.showPreview(e)
                        }
                    }
                }, [t._v(t._s(e.name))])], 1), t._v(" "), !t.isEmpty(t.auth) && ["O", "A", "M"].indexOf(t.group.memberRole) > -1 ? n("button", {
                    staticClass: "button is-text",
                    on: {
                        click: function(n) {
                            return n.preventDefault(),
                            t.downloadPostMedia(e)
                        }
                    }
                }, [t._v("\n                      Unduh\n                    ")]) : t._e()])
            }
            )), 0)])])])])]), t._v(" "), t.isEmpty(t.carousel_video) || "H" !== t.learning_material.type ? t._e() : n("div", {
                staticClass: "card is-boxed",
                class: {
                    "is-bg": !t.bgwhite
                },
                staticStyle: {
                    "margin-bottom": "15px"
                }
            }, [n("div", {
                staticClass: "card-content"
            }, [t.isEmpty(t.interactive_questions) ? t._e() : n("interactive-playground", {
                attrs: {
                    video: t.videos[0],
                    isAutoPlay: !0,
                    questions: t.interactive_questions,
                    groupMemberId: t.group.memberId,
                    learningMaterialId: t.learning_material.id
                }
            }), t._v(" "), n("div", {
                staticStyle: {
                    "margin-top": "24px"
                }
            }, [n("h1", {
                staticClass: "font-20 font-poppins font-w-600 has-text-black",
                staticStyle: {
                    "margin-bottom": "4px"
                }
            }, [t._v(t._s(t.learning_material.title))]), t._v(" "), n("p", {
                staticClass: "font-w-400 font-poppins font-14",
                staticStyle: {
                    color: "#4F4F4F"
                }
            }, [t._v(t._s(t.interactive_questions.length) + " Pertanyaan · " + t._s(t.learning_material.group.name) + " (Sesi " + t._s(t.learning_material.section.meet) + ")")])])], 1)]), t._v(" "), n("div", {
                staticClass: "card is-boxed",
                staticStyle: {
                    "margin-bottom": "15px"
                }
            }, [t._m(3), t._v(" "), n("div", {
                staticClass: "card-content"
            }, [n("span", {
                domProps: {
                    innerHTML: t._s(t.learning_material.description)
                }
            })])]), t._v(" "), ["Q"].indexOf(t.learning_material.type) > -1 ? n("upload-tqa-box-student", {
                attrs: {
                    teacher_question: t.learning_material.teacherQuestion,
                    group: t.group
                }
            }) : t._e()], 1) : t._e(), t._v(" "), t.isEmpty(t.learning_material.quiz) || "Z" != t.learning_material.type ? t._e() : n("div", [n("div", {
                staticClass: "card is-boxed",
                class: {
                    "is-bg": !t.bgwhite
                },
                staticStyle: {
                    "margin-bottom": "15px"
                }
            }, [t._m(4), t._v(" "), n("div", {
                staticClass: "card-content",
                staticStyle: {
                    padding: "15px"
                }
            }, [n("div", {
                staticClass: "is-relative"
            }, [n("div", [t.learning_material.quiz.isRetakeable && !t.isEmpty(t.result) && t.learning_material.quiz.maxRetake - t.result.quizTakedCount > 0 && !t.isEmpty(t.learning_material.quiz.gradeLimit) && t.result.totalScore < t.learning_material.quiz.gradeLimit && !t.quizRetakeAvailable ? n("div", {
                staticClass: "overlay",
                staticStyle: {
                    "backdrop-filter": "blur(6px)",
                    "background-color": "rgba(0,0,0,0.8)",
                    "border-radius": "8px"
                }
            }, [n("div", {
                staticClass: "columns is-vcentered has-text-centered",
                staticStyle: {
                    margin: "0",
                    height: "100%"
                }
            }, [n("div", {
                staticClass: "column"
            }, [n("p", {
                staticClass: "subtitle font-w-500 font-14 has-text-white"
            }, [t._v("Waktu menuju pengerjaan kembali :")]), t._v(" "), n("p", {
                staticClass: "title font-w-600 font-20 has-text-white"
            }, [n("vcountdown", {
                attrs: {
                    finished: t._moment(t.result.lastFinishedTest).add(t.learning_material.quiz.pauseRetake, "seconds").format("YYYY-MM-DD HH:mm:ss"),
                    onExpired: t.onQuizAvailabled
                }
            })], 1)])])]) : t._e(), t._v(" "), n("div", {
                staticClass: "columns is-mobile is-tablet is-desktop is-multiline is-vcentered"
            }, [n("div", {
                staticClass: "column is-8"
            }, [t.isEmpty(t.learning_material.quiz.finishedAt) ? t._e() : n("span", {
                staticClass: "tag has-background-greystroke",
                staticStyle: {
                    padding: "16px 8px",
                    "border-radius": "8px",
                    "margin-bottom": "12px"
                }
            }, [n("vcountdown", {
                staticClass: "font-14 font-w-600 has-text-darkblue",
                attrs: {
                    finished: t.learning_material.quiz.finishedAt
                }
            })], 1), t._v(" "), n("p", {
                staticClass: "font-18 font-w-500 has-text-left",
                staticStyle: {
                    "margin-bottom": "8px"
                }
            }, [t._v(t._s(t.learning_material.title))]), t._v(" "), n("p", {
                staticClass: "font-14 font-w-400 has-text-grey2",
                staticStyle: {
                    "margin-bottom": "20px"
                }
            }, [t._v("\n                    Jumlah Soal: " + t._s(t.learning_material.quiz.questionsCount) + " Soal "), t.isEmpty(t.learning_material.quiz.duration) ? t._e() : n("span", [t._v("· Durasi Pengerjaan: " + t._s(t.secondsToHms(t.learning_material.quiz.duration)))])]), t._v(" "), t.loading_get_result || t.quizTimerLoading || t.isEmpty(t.result) || 0 !== t.result.submittedAt || t.isEmpty(t.learning_material.quiz.duration) ? t._e() : n("div", [n("p", {
                staticClass: "font-14 font-w-600",
                staticStyle: {
                    "margin-bottom": "8px"
                }
            }, [t._v("Sisa waktu pengerjaan :")]), t._v(" "), n("p", {
                staticClass: "font-20 font-w-600",
                class: {
                    "has-text-red": t.quizProgress <= 0
                }
            }, [t._v(t._s(t.quizHours) + ":" + t._s(t.quizMinutes) + ":" + t._s(t.quizSeconds))])])]), t._v(" "), n("div", {
                staticClass: "column is-4"
            }, [t.canStartQuiz ? n("button", {
                staticClass: "button is-primary is-pulled-right font-16 font-w-600 play-quiz-button",
                class: {
                    "is-loading": t.loading_start_quiz || t.finishQuizLoading
                },
                attrs: {
                    disabled: t.loading_start_quiz || t.finishQuizLoading
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.playQuiz(t.learning_material)
                    }
                }
            }, [n("span", [t._v("\n                      Mulai Quiz\n                    ")])]) : t.canContinueAnswerQuiz ? n("button", {
                staticClass: "button is-primary is-pulled-right font-16 font-w-600 play-quiz-button",
                class: {
                    "is-loading": t.loading_start_quiz || t.finishQuizLoading
                },
                attrs: {
                    disabled: t.loading_start_quiz || t.finishQuizLoading
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.checkIsConfirmationNeeded(t.learning_material)
                    }
                }
            }, [n("span", [t._v("\n                      " + t._s(0 >= t.quizProgress && !t.isEmpty(t.learning_material.quiz.duration) ? "Kumpulkan Quiz" : "Lanjutkan Quiz") + "\n                    ")])]) : t.canRetakeQuiz ? n("button", {
                staticClass: "button is-primary is-pulled-right font-16 font-w-600 play-quiz-button",
                class: {
                    "is-loading": t.loading_start_quiz || t.finishQuizLoading
                },
                attrs: {
                    disabled: t.loading_start_quiz || t.finishQuizLoading
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.playQuiz(t.learning_material)
                    }
                }
            }, [n("span", [t._v("\n                      Mulai Ulang Quiz\n                    ")])]) : t._e()])])])])])]), t._v(" "), !t.isEmpty(t.result) && t.result.submittedAt > 0 ? n("div", [n("div", {
                staticClass: "card is-boxed",
                staticStyle: {
                    "margin-bottom": "15px"
                }
            }, [t._m(5), t._v(" "), n("div", {
                staticClass: "card-content"
            }, [n("result-quiz", {
                class: {
                    "is-bg": !t.bgwhite
                },
                attrs: {
                    quiz: t.learning_material.quiz,
                    result: t.result,
                    member_role: t.group.memberRole
                }
            })], 1)]), t._v(" "), !t.isEmpty(t.learning_material.quiz) && t.learning_material.quiz.showReportToMembers && (!t.learning_material.quiz.isRetakeable && 2 == t.learning_material.quiz.status || t.learning_material.quiz.isRetakeable && !t.isEmpty(t.learning_material.quiz.gradeLimit) && t.result.totalScore >= t.learning_material.quiz.gradeLimit) ? n("div", {
                staticClass: "card is-boxed",
                staticStyle: {
                    "margin-bottom": "15px"
                }
            }, [t._m(6), t._v(" "), n("div", {
                staticClass: "card-content"
            }, [n("a", {
                staticClass: "button is-info",
                class: {
                    "is-loading": t.loading_redirect_report,
                    "is-disabled": t.loading_redirect_report
                },
                attrs: {
                    href: ""
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.toQuizReport.apply(null, arguments)
                    }
                }
            }, [t._v("Lihat Laporan Detail Quiz")])])]) : t._e()]) : t._e()]), t._v(" "), ["V"].indexOf(t.learning_material.type) > -1 && "GMEET" == t.learning_material.conferenceType && !t.isEmpty(t.learning_material.section) ? n("div", {
                staticClass: "card is-boxed"
            }, [t._m(7), t._v(" "), n("div", {
                staticClass: "card-content"
            }, [n("p", {
                staticClass: "font-poppins font-16 has-text-neutralgray3"
            }, [t._v("Sesi " + t._s(t.learning_material.section.meet) + " • " + t._s(t.dateSectionFormat(t.learning_material.section.startedAt, t.learning_material.section.endedAt)))])])]) : t._e(), t._v(" "), "V" == t.learning_material.type ? n("div", {
                staticStyle: {
                    "margin-bottom": "15px"
                }
            }, [n("div", {
                staticClass: "card is-boxed"
            }, [n("header", {
                staticClass: "card-header"
            }, [n("p", {
                staticClass: "card-header-title"
            }, [t.isEmpty(t.learning_material.meet) || t.isEmpty(t.learning_material.meet.playVideoRecordingUrl) ? n("span", [t._v("Video Conference")]) : n("span", [t._v("Video Recording URL")])])]), t._v(" "), n("div", {
                staticClass: "card-content"
            }, ["A" == t.learning_material.status ? n("div", [t.isEmpty(t.learning_material.conferenceType) || "GMEET" == t.learning_material.conferenceType ? n("div", [n("a", {
                staticClass: "button is-fullwidth is-large is-bg-primary has-text-white disabled",
                staticStyle: {
                    margin: "0",
                    "border-radius": "8px",
                    padding: "10px",
                    border: "none"
                },
                style: t.isEmpty(t.learning_material.gmeetUrl) ? "background-color: #C2C2C2 !important; pointer-events: none;" : "",
                attrs: {
                    href: t.learning_material.gmeetUrl,
                    target: "_blank",
                    rel: "noopener"
                }
            }, [t._m(8), t._v(" "), t._m(9)]), t._v(" "), t._m(10)]) : "started" == t.learning_material.zoomStatus ? n("a", {
                staticClass: "button is-fullwidth is-large is-bg-info has-text-white",
                attrs: {
                    href: "A" == t.group.type ? t.learning_material.zoomJoinUrl + " + &uname=" + t.account.name + "|" + t.account.userUniversityId + "|" + t.group.memberId : t.learning_material.zoomJoinUrl + " + &uname=" + t.auth.name + "||" + t.group.memberId,
                    target: "_blank",
                    rel: "noopener"
                }
            }, [t._m(11), t._v(" "), t._m(12)]) : "ended" == t.learning_material.zoomStatus ? n("div", [t.isEmpty(t.learning_material.meet) || t.isEmpty(t.learning_material.meet.playVideoRecordingUrl) ? n("div", {
                staticClass: "box has-background-primary has-text-centered",
                staticStyle: {
                    padding: "10px"
                }
            }, [t._m(13)]) : n("div", [t._m(14), t._v(" "), n("div", {
                staticClass: "middle-content"
            }, [n("div", {
                staticClass: "tugas__content-timeline"
            }, [n("div", {
                staticClass: "content is-block",
                staticStyle: {
                    padding: "0",
                    border: "none",
                    margin: "0"
                }
            }, [t.isAdmin && !t.isEmpty(t.account) && t.account.university.id == t.group.universityId || !t.isEmpty(t.auth) && ["O", "A", "M"].indexOf(t.group.memberRole) > -1 && !t.isEmpty(t.learning_material.meet.playVideoRecordingUrl) ? n("div", {
                staticClass: "file-download",
                staticStyle: {
                    padding: "5px 0",
                    width: "100%"
                }
            }, [n("span", [n("b-icon", {
                staticClass: "has-text-info",
                staticStyle: {
                    "margin-left": "10px"
                },
                attrs: {
                    icon: "video"
                }
            }), t._v(" "), n("a", {
                attrs: {
                    target: "_blank",
                    rel: "noopener",
                    href: t.learning_material.meet.playVideoRecordingUrl
                }
            }, [t._v("Recording URL")])], 1), t._v(" "), n("a", {
                staticClass: "button is-text",
                attrs: {
                    target: "_blank",
                    rel: "noopener",
                    href: t.learning_material.meet.playVideoRecordingUrl
                }
            }, [t._v("Lihat")])]) : t._e(), t._v(" "), n("p", {
                staticClass: "help",
                staticStyle: {
                    "margin-top": "7px"
                }
            }, [n("strong", [t._v("Catatan:")]), t._v(" Rekaman video conference akan dihapus secara otomatis pada tanggal " + t._s(t.autoDeleteRecordingDate))])])])])])]) : t.isEmpty(t.learning_material.zoomStatus) || "waiting" == t.learning_material.zoomStatus ? n("div", {
                staticClass: "box is-bg-lighterblue has-text-centered"
            }, [t._m(15)]) : t._e(), t._v(" "), "started" == t.learning_material.zoomStatus ? n("br") : t._e(), t._v(" "), "started" == t.learning_material.zoomStatus ? n("div", {
                staticClass: "box is-bg-white-ter"
            }, ["started" == t.learning_material.zoomStatus ? n("b-field", {
                attrs: {
                    label: "Meeting ID"
                }
            }, [n("b-input", {
                attrs: {
                    expanded: "",
                    value: t.learning_material.zoomMeetingId,
                    readonly: ""
                }
            })], 1) : t._e(), t._v(" "), "started" == t.learning_material.zoomStatus ? n("b-field", {
                attrs: {
                    label: "Password"
                }
            }, [n("b-input", {
                attrs: {
                    type: "password",
                    expanded: "",
                    value: t.learning_material.zoomPassword,
                    readonly: "",
                    "password-reveal": ""
                }
            })], 1) : t._e(), t._v(" "), "started" == t.learning_material.zoomStatus ? n("b-field", {
                attrs: {
                    label: "Your Name"
                }
            }, [n("b-input", {
                attrs: {
                    expanded: "",
                    value: t.account.name + "|" + t.account.userUniversityId + "|" + t.group.memberId,
                    readonly: ""
                }
            })], 1) : t._e(), t._v(" "), t._m(16)], 1) : t._e()]) : t._e()])])]) : t._e(), t._v(" "), n("div", {
                staticClass: "card is-boxed",
                staticStyle: {
                    "margin-bottom": "15px"
                }
            }, [t._m(17), t._v(" "), n("div", {
                staticClass: "card-content"
            }, [n("comment-box", {
                key: t.learning_material.id,
                attrs: {
                    group: t.group,
                    memberId: t.group.memberId,
                    memberRole: t.group.memberRole,
                    post: t.learning_material,
                    loadSelf: !0
                },
                on: {
                    onReplied: function(data) {
                        return t.learning_material.commentCount = data.dataProvider.page.total
                    }
                }
            })], 1)])]), t._v(" "), t.isEmpty(t.learning_material) ? n("div", {
                staticClass: "box"
            }, [n("p", [t._v("Data tidak ditemukan.")])]) : t._e(), t._v(" "), n("quiz-same-device-confirmation"), t._v(" "), n("quiz-timeout-confirmation", {
                attrs: {
                    isShow: t.quizTimeoutConfirmationShow,
                    isLoading: t.finishQuizLoading,
                    onAgree: t.finishQuiz,
                    onCancel: function() {
                        return t.quizTimeoutConfirmationShow = !1
                    }
                }
            }), t._v(" "), n("quiz-injury-time-confirmation", {
                attrs: {
                    isShow: t.quizInjuryTimeConfirmationShow,
                    isLoading: t.loading_start_quiz || t.finishQuizLoading,
                    onContinue: function() {
                        return t.playQuiz(t.learning_material)
                    },
                    onSubmit: t.finishQuiz
                }
            }), t._v(" "), n("b-modal", {
                attrs: {
                    active: t.show_confirm_unload_interactive_video,
                    width: 446,
                    scroll: "clip",
                    "has-modal-card": ""
                },
                on: {
                    "update:active": function(e) {
                        t.show_confirm_unload_interactive_video = e
                    }
                }
            }, [n("div", {
                staticClass: "modal-card",
                staticStyle: {
                    width: "446px"
                }
            }, [n("header", {
                staticClass: "modal-card-head has-text-centered has-background-white",
                staticStyle: {
                    border: "none"
                }
            }, [n("div", {
                staticClass: "modal-card-title"
            }, [n("p", {
                staticClass: "title font-20 font-w-600 font-poppins",
                staticStyle: {
                    "margin-bottom": "10px"
                }
            }, [t._v("Video kamu belum selesai, yakin "), n("br"), t._v(" ingin keluar?")]), t._v(" "), n("p", {
                staticClass: "font-14 font-poppins",
                staticStyle: {
                    color: "#292929",
                    "line-height": "24px"
                }
            }, [t._v("Pengerjaanmu disimpan sementara dan kamu "), n("br"), t._v(" bisa lanjut nonton nanti")])])]), t._v(" "), n("footer", {
                staticClass: "modal-card-foot has-background-white",
                staticStyle: {
                    border: "none",
                    "padding-top": "0px"
                }
            }, [n("a", {
                staticClass: "button is-fullwidth font-w-600 font-16 font-poppins button-confirm-danger-outlined",
                staticStyle: {
                    "margin-right": "20px"
                },
                on: {
                    click: function(e) {
                        e.preventDefault(),
                        t.show_confirm_unload_interactive_video = !1
                    }
                }
            }, [t._v("Tidak")]), t._v(" "), n("button", {
                staticClass: "button is-fullwidth font-w-700 font-16 font-poppins button-confirm-danger",
                on: {
                    click: function(e) {
                        e.preventDefault(),
                        t.show_confirm_unload_interactive_video = !1
                    }
                }
            }, [t._v("Ya, Hapus")])])])])], 1)
        }
        ), [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("header", {
                staticClass: "card-header"
            }, [n("p", {
                staticClass: "card-header-title"
            }, [t._v("Gambar")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("header", {
                staticClass: "card-header"
            }, [n("p", {
                staticClass: "card-header-title"
            }, [t._v("Video")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("header", {
                staticClass: "card-header"
            }, [n("p", {
                staticClass: "card-header-title"
            }, [t._v("Dokumen")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("header", {
                staticClass: "card-header"
            }, [n("p", {
                staticClass: "card-header-title"
            }, [t._v("Catatan")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("header", {
                staticClass: "card-header"
            }, [n("p", {
                staticClass: "card-header-title"
            }, [t._v("Quiz")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("header", {
                staticClass: "card-header"
            }, [n("p", {
                staticClass: "card-header-title"
            }, [t._v("Hasil Quiz")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("header", {
                staticClass: "card-header"
            }, [n("p", {
                staticClass: "card-header-title"
            }, [t._v("Laporan Quiz")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("header", {
                staticClass: "card-header"
            }, [n("p", {
                staticClass: "card-header-title"
            }, [t._v("Waktu sesi pertemuan")])])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("span", {
                staticClass: "icon"
            }, [e("img", {
                attrs: {
                    src: "/assets/img/icon/video-circle.svg"
                }
            })])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("span", [n("small", [t._v("Gabung Conference")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("p", {
                staticClass: "font-13 font-poppins has-text-grey3",
                staticStyle: {
                    "margin-top": "12px"
                }
            }, [n("i", {
                staticClass: "fas fa-info-circle"
            }), t._v(" Video Conference menggunakan Google Meet")])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("span", {
                staticClass: "icon"
            }, [e("i", {
                staticClass: "fas fa-chalkboard"
            })])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("span", [n("small", [t._v("Gabung ke Conference")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("p", {
                staticClass: "has-text-white"
            }, [n("i", {
                staticClass: "fas fa-check"
            }), t._v(" Pertemuan telah SELESAI\n                ")])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "message is-primary",
                staticStyle: {
                    margin: "0"
                }
            }, [n("div", {
                staticClass: "message-body",
                staticStyle: {
                    padding: "15px"
                }
            }, [t._v("\n                    Lihat ulang perkuliahanmu melalui video url dibawah ini:\n                  ")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("p", [n("i", {
                staticClass: "fas fa-spinner"
            }), t._v(" Pertemuan belum dimulai\n              ")])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("p", {
                staticClass: "help has-text-grey"
            }, [t._v("\n                Untuk pencatatan tanda kehadiran, pastikan kolom\n                "), n("code", [t._v('"Your Name"')]), t._v(" pada ZOOM sesuai dengan kolom diatas.\n              ")])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("header", {
                staticClass: "card-header"
            }, [n("p", {
                staticClass: "card-header-title"
            }, [t._v("Komentar")])])
        }
        ], !1, null, "f9d7f3a2", null));
        e.a = D.exports
    },
    835: function(t, e, n) {
        "use strict";
        n(18),
        n(17),
        n(22),
        n(23);
        var r = n(9)
          , l = n(12)
          , o = (n(19),
        n(26),
        n(60),
        n(31),
        n(42),
        n(29),
        n(53),
        n(16),
        n(14))
          , c = n(0)
          , d = n(102)
          , m = {
            props: {
                post: {
                    type: Object,
                    required: !0
                },
                questions: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            mixins: [d.a],
            mounted: function() {
                this.getPaginatedQuizRank(this.post.quiz.id, !0)
            },
            computed: {
                isAnyStudentCheating: function() {
                    var t = this;
                    return this.members.filter((function(e) {
                        return !t.isEmpty(e.proctoringCheatDetection) && e.proctoringCheatDetection.isCheating
                    }
                    )).length > 0
                },
                totalMembersNotTakeQuiz: function() {
                    return this.post.group.totalMember - this.quizRankDataProvider.page.total
                }
            },
            watch: {
                is_show_quiz_takes_history: function(t) {
                    var e = this;
                    !0 === t && this.$axios.post(c.M.GET_HISTORIES(this.post.quiz.id), {
                        group_member_id: this.selected_member.groupMemberId
                    }, {
                        headers: {
                            "x-gmid": this.post.group.memberId
                        }
                    }).then((function(t) {
                        var data = t.data;
                        if (0 == data.applicationSystem.code) {
                            var n = collect(data.data).map((function(t) {
                                return t.score = parseInt(t.score),
                                t
                            }
                            )).sortByDesc("started_at").sortByDesc("score").first()
                              , r = data.data.length;
                            e.historyData = data.data.map((function(t, l) {
                                var o = n.uuid === t.uuid;
                                return l > 0 && (r -= 1),
                                {
                                    execution: r,
                                    started_at: e.dateFormat(t.startedAt, "DD MMM YYYY, HH:mm"),
                                    submitted_at: e.dateFormat(t.submittedAt, "DD MMM YYYY, HH:mm"),
                                    duration: e.secondsToHms(moment(t.submittedAt).diff(moment(t.startedAt), "seconds")),
                                    score: "".concat(t.score).concat(o && data.data.length > 1 ? " ✅" : "")
                                }
                            }
                            ))
                        }
                    }
                    ))
                }
            },
            data: function() {
                return {
                    collapsed: !0,
                    members: [],
                    selected_member: null,
                    selected_member_answers: null,
                    is_show_quiz_takes_history: !1,
                    historyColumns: [{
                        field: "execution",
                        label: "Pengerjaan ke",
                        width: "170",
                        numeric: !0,
                        centered: !0
                    }, {
                        field: "started_at",
                        label: "Waktu Mulai",
                        centered: !0
                    }, {
                        field: "submitted_at",
                        label: "Waktu Selesai",
                        centered: !0
                    }, {
                        field: "duration",
                        label: "Durasi",
                        centered: !0
                    }, {
                        field: "score",
                        label: "Nilai",
                        centered: !0
                    }],
                    historyData: []
                }
            },
            methods: {
                getRanks: function() {
                    this.getPaginatedQuizRank(this.post.quiz.id)
                },
                detail: function(t) {
                    this.selected_member = t
                },
                onGetPaginatedQuizRankSuccess: function(t, e) {
                    var n = this
                      , r = collect(t.data.data).map((function(t) {
                        return t.proctoringCheatDetection = null,
                        n.isEmpty(t.proctoring) || (t.proctoringCheatDetection = n.proctoringCheatDetection(t.proctoring)),
                        t
                    }
                    )).toArray();
                    e || (r = this.members.concat(r)),
                    this.members = r,
                    this.quizRankDataProvider = t.data.dataProvider
                },
                toResult: function(t) {
                    this.$router.push("/panel/quiz-result?postId=".concat(this.post.id, "&quizId=").concat(this.post.quiz.id, "&quizMemberId=").concat(t.quizMemberId, "&quizMemberUuid=").concat(t.quizMemberUuid))
                },
                removeQuizMember: function(t) {
                    var e = this
                      , n = null != t.idBefore ? "Peserta memiliki riwayat pengerjaan dan nilai akan diambil yang tertinggi. Apakah anda yakin akan menghapus peserta quiz ini?" : "Apakah anda yakin akan menghapus peserta quiz ini?";
                    this.$buefy.dialog.confirm({
                        message: n,
                        confirmText: "Hapus",
                        cancelText: "Batal",
                        type: "is-danger",
                        hasIcon: !0,
                        onConfirm: function() {
                            e.$axios.post(c.M.DELETE(t.quizMemberId), {}, {
                                headers: {
                                    "x-gmid": e.post.group.memberId
                                }
                            }).then((function(t) {
                                var data = t.data;
                                0 == data.applicationSystem.code ? (toast.default(data.applicationSystem.message),
                                e.getPaginatedQuizRank(e.post.quiz.id, !0)) : toast.danger(data.applicationSystem.message)
                            }
                            ))
                        }
                    })
                },
                showHistoryToggle: function(t) {
                    this.selected_member = t,
                    this.is_show_quiz_takes_history = !0
                }
            }
        }
          , v = (n(1036),
        n(4))
          , component = Object(v.a)(m, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "card is-boxed"
            }, [n("header", {
                staticClass: "card-header"
            }, [n("p", {
                staticClass: "card-header-title"
            }, [t._v("Peserta Quiz")]), t._v(" "), n("div", {
                staticClass: "card-header-icon"
            }, [n("collapse-toggler", {
                attrs: {
                    open: t.collapsed,
                    onClick: function() {
                        t.collapsed = !t.collapsed
                    }
                }
            })], 1)]), t._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.collapsed,
                    expression: "collapsed"
                }],
                staticClass: "card-table"
            }, [t.isEmpty(t.members) ? n("div", {
                staticStyle: {
                    padding: "20px 0"
                }
            }, [n("empty-data", {
                staticStyle: {
                    margin: "0"
                }
            }, [n("p", {
                staticClass: "font-14"
            }, [t._v("Tidak ada laporan.")])])], 1) : n("div", [t.loading_get_member_answers ? n("spinner-loading") : t._e(), t._v(" "), n("div", [n("div", {
                staticClass: "columns is-mobile is-tablet is-desktop is-vcentered is-marginless"
            }, [n("div", {
                staticClass: "column",
                class: t.isAnyStudentCheating ? "is-8" : "is-12"
            }, [n("p", {
                staticClass: "font-14 font-w-400",
                staticStyle: {
                    color: "#666666"
                }
            }, [t._v(t._s(t.quizRankDataProvider.page.total) + " peserta sudah menyelesaikan pengerjaan kuis")]), t._v(" "), t.totalMembersNotTakeQuiz > 0 ? n("p", {
                staticClass: "font-14 font-w-400 has-text-secondary"
            }, [t._v(t._s(t.totalMembersNotTakeQuiz) + " peserta belum mengerjakan quiz")]) : t._e()]), t._v(" "), t.isAnyStudentCheating ? n("div", {
                staticClass: "column is-4"
            }, [n("a", {
                staticClass: "button is-text is-pulled-right",
                staticStyle: {
                    cursor: "auto",
                    background: "none"
                },
                attrs: {
                    href: ""
                },
                on: {
                    click: function(t) {
                        return t.preventDefault(),
                        function() {}
                        .apply(null, arguments)
                    }
                }
            }, [n("span", {
                staticClass: "icon"
            }, [n("icon-collection", {
                attrs: {
                    media: {
                        type: "image",
                        thumb_url: "/assets/img/icon/circle-exclamation-red-16x16.svg"
                    },
                    size: "is-16x16"
                }
            })], 1), t._v(" "), n("span", {
                staticClass: "font-14 font-w-500 has-text-darkred"
            }, [t._v("Terindikasi curang")])])]) : t._e()]), t._v(" "), n("div", [n("table", {
                staticClass: "table is-fullwidth is-hoverable",
                staticStyle: {
                    margin: "0"
                }
            }, [t._m(0), t._v(" "), n("tbody", t._l(t.members, (function(e, r) {
                return n("tr", {
                    key: r
                }, [n("td", [n("div", {
                    staticClass: "columns is-mobile is-tablet is-dekstop is-vcentered is-gapless"
                }, [n("div", {
                    staticClass: "column is-narrow",
                    staticStyle: {
                        "margin-right": "12px"
                    }
                }, [n("p", {
                    staticClass: "image is-32x32 is-circle"
                }, [n("avatar", {
                    attrs: {
                        avatar_url: t.isEmpty(e.avatar) || t.isEmpty(e.avatar.thumb) || t.isEmpty(e.avatar.thumb.link) ? null : e.avatar.thumb.link,
                        inputClass: "is-rounded"
                    }
                })], 1)]), t._v(" "), n("div", {
                    staticClass: "column"
                }, [n("p", {
                    staticClass: "font-16 font-w-500"
                }, [t._v(t._s("A" === t.post.group.type ? e.namaMahasiswa : e.namaUser))]), t._v(" "), t.isEmpty(e.nim) ? t._e() : n("p", {
                    staticClass: "font-14 font-w-400 has-text-grey"
                }, [t._v(t._s(e.nim))])])])]), t._v(" "), n("td", [n("small", [n("p", [n("strong", [t._v("Mulai:")]), t._v(" " + t._s(t.dateFormat(e.startedAt, "DD MMM YYYY, HH:mm")))]), t._v(" "), n("p", [n("strong", [t._v("Selesai:")]), t._v(" " + t._s(t.dateFormat(e.memberFinishedAt, "DD MMM YYYY, HH:mm")))]), t._v(" "), n("p", [n("strong", [t._v("Durasi:")]), t._v(" " + t._s(t.secondsToHms(e.duration)))])])]), t._v(" "), n("td", {
                    staticClass: "has-text-centered"
                }, [!t.isEmpty(e.proctoringCheatDetection) && e.proctoringCheatDetection.isCheating ? n("a", {
                    staticClass: "button is-text",
                    staticStyle: {
                        padding: "4px",
                        cursor: "auto",
                        background: "none"
                    },
                    attrs: {
                        href: ""
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(),
                            function() {}
                            .apply(null, arguments)
                        }
                    }
                }, [n("icon-collection", {
                    attrs: {
                        media: {
                            type: "image",
                            thumb_url: "/assets/img/icon/circle-exclamation-red-16x16.svg"
                        },
                        size: "is-16x16"
                    }
                })], 1) : t._e(), t._v(" "), n("button", {
                    staticClass: "button is-text",
                    class: t.post.quiz.gradeLimit <= e.totalScore ? "has-background-primary4" : "has-background-lightred",
                    staticStyle: {
                        "border-radius": "8px",
                        width: "70px",
                        cursor: "auto"
                    }
                }, [n("span", {
                    staticClass: "icon"
                }, [n("icon-collection", {
                    attrs: {
                        media: {
                            type: "image",
                            thumb_url: "/assets/img/icon/star-yellow.svg"
                        },
                        size: "is-16x16"
                    }
                })], 1), t._v(" "), n("span", {
                    staticClass: "font-20 font-w-600",
                    class: t.post.quiz.gradeLimit <= e.totalScore ? "has-text-darkblue" : "has-text-red"
                }, [t._v("\n                      " + t._s(e.totalScore) + "\n                    ")])])]), t._v(" "), n("td", {
                    staticClass: "has-text-right"
                }, [n("b-dropdown", {
                    attrs: {
                        "aria-role": "list",
                        hoverable: ""
                    }
                }, [n("a", {
                    staticClass: "button",
                    attrs: {
                        slot: "trigger",
                        href: ""
                    },
                    on: {
                        click: function(t) {
                            t.preventDefault()
                        }
                    },
                    slot: "trigger"
                }, [n("b-icon", {
                    attrs: {
                        icon: "dots-vertical"
                    }
                })], 1), t._v(" "), n("b-dropdown-item", {
                    attrs: {
                        "aria-role": "listitem"
                    },
                    on: {
                        click: function(n) {
                            return t.toResult(e)
                        }
                    }
                }, [n("i", {
                    staticClass: "fas fa-eye"
                }), t._v(" Detail\n                    ")]), t._v(" "), t.post.quiz.isRetakeable ? n("b-dropdown-item", {
                    attrs: {
                        "aria-role": "listitem"
                    },
                    on: {
                        click: function(n) {
                            return t.showHistoryToggle(e)
                        }
                    }
                }, [n("i", {
                    staticClass: "fas fa-list"
                }), t._v(" Histori pengerjaan\n                    ")]) : t._e(), t._v(" "), n("b-dropdown-item", {
                    staticClass: "has-text-darkred",
                    attrs: {
                        "aria-role": "listitem"
                    },
                    on: {
                        click: function(n) {
                            return t.removeQuizMember(e)
                        }
                    }
                }, [n("i", {
                    staticClass: "fas fa-trash"
                }), t._v("  Hapus\n                    ")])], 1)], 1)])
            }
            )), 0)]), t._v(" "), n("pagination", {
                attrs: {
                    dataProvider: t.quizRankDataProvider,
                    clickHandler: t.getRanks,
                    infinity_scroll: !0
                }
            }), t._v(" "), t.post.quiz.isRetakeable ? n("b-modal", {
                attrs: {
                    active: t.is_show_quiz_takes_history,
                    "trap-focus": "",
                    "aria-role": "dialog",
                    "aria-modal": "",
                    "can-cancel": !1,
                    "has-modal-card": ""
                },
                on: {
                    "update:active": function(e) {
                        t.is_show_quiz_takes_history = e
                    }
                }
            }, [n("div", {
                staticClass: "modal-card",
                staticStyle: {
                    width: "auto"
                }
            }, [n("header", {
                staticClass: "modal-card-head is-bg-primary"
            }, [n("p", {
                staticClass: "modal-card-title has-text-white"
            }, [t._v("Histori pengerjaan")])]), t._v(" "), n("div", {
                staticClass: "modal-card-body"
            }, [n("p", {
                staticStyle: {
                    "margin-bottom": "10px"
                }
            }, [n("strong", [t._v("Catatan:")]), t._v(" Nilai diambil yang tertinggi")]), t._v(" "), n("b-table", {
                attrs: {
                    bordered: !0,
                    data: t.historyData,
                    columns: t.historyColumns
                }
            })], 1)]), t._v(" "), n("footer", {
                staticClass: "modal-card-foot"
            }, [n("button", {
                staticClass: "button is-white has-text-primary font-w-600",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.is_show_quiz_takes_history = !1
                    }
                }
            }, [t._v("Tutup")])])]) : t._e()], 1)])], 1)])])
        }
        ), [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("thead", [n("tr", [n("th", {
                staticStyle: {
                    width: "300px"
                }
            }, [t._v("Mahasiswa")]), t._v(" "), n("th", [t._v("Tanggal & Waktu")]), t._v(" "), n("th", {
                staticClass: "has-text-centered",
                staticStyle: {
                    width: "150px"
                }
            }, [t._v("Nilai")]), t._v(" "), n("th")])])
        }
        ], !1, null, "efd9d34c", null)
          , h = component.exports
          , f = n(764)
          , y = n(106)
          , C = n(73)
          , k = n(61)
          , x = n(105)
          , w = n(108)
          , z = n(854)
          , S = n(213)
          , E = n(812)
          , M = n(856)
          , D = n(857);
        function A(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }
                ))),
                e.push.apply(e, n)
            }
            return e
        }
        function T(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? A(Object(source), !0).forEach((function(e) {
                    Object(l.a)(t, e, source[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : A(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }
                ))
            }
            return t
        }
        var O = {
            components: {
                QuizReportSimple: h,
                vcountdown: C.a,
                txteditor: k.a,
                VideoManager: x.a,
                DatetimePicker: w.a,
                ConferenceAttendances: z.a,
                CommentBox: S.a,
                EditDisabledNotification: E.a,
                SwingArrow: M.a,
                InteractivePlayground: D.a
            },
            mixins: [d.a, f.a, y.a],
            props: {
                group: {
                    type: Object,
                    required: !0
                },
                data_learning_material: {
                    type: Object,
                    required: !0
                },
                default_edit: {
                    type: Boolean,
                    default: !1
                },
                bgwhite: {
                    type: Boolean,
                    default: !0
                },
                onSaved: {
                    type: Function,
                    default: function() {}
                }
            },
            mounted: function() {
                if ("Z" === this.learning_material.type && this.getQuizQuestions(this.learning_material.quiz.id),
                "Q" === this.learning_material.type && this.getFileSize(),
                "H" === this.learning_material.type && this.getDetailInteractivePost(),
                !this.isEmpty(this.$route.query.status) && !this.isEmpty(this.$cookies.get("_editdata")))
                    if ("done" === this.$route.query.status) {
                        var t = this.$cookies.get("_editdata");
                        this.saveLearningMaterial(t.id, t.data),
                        this.$cookies.remove("_editdata")
                    } else
                        this.$cookies.remove("_editdata"),
                        this.$buefy.toast.open({
                            message: "Gagal menyambungkan akun, silahkan posting dan sambungkan ulang",
                            type: "is-danger"
                        });
                this.track("learning_material", "view_detail_learning_material", this.learning_material.id, "gm", this.group.memberId)
            },
            computed: T(T({}, Object(o.d)({
                auth: function(t) {
                    return t.auth
                },
                account: function(t) {
                    return t.auth.active_pt
                }
            })), {}, {
                videos: function() {
                    return collect(this.learning_material.medias).whereIn("type", ["video", "youtube"]).toArray()
                },
                images: function() {
                    return collect(this.learning_material.medias).where("type", "image").toArray()
                },
                documents: function() {
                    return collect(this.learning_material.medias).where("type", "document").toArray()
                },
                documents_and_others: function() {
                    return collect(this.learning_material.medias).whereIn("type", ["other", "document"]).toArray()
                },
                carousel_items: function() {
                    var t = this
                      , e = this.learning_material;
                    return this.isEmpty(e) || this.isEmpty(this.images) ? [] : collect(this.images).map((function(e) {
                        return {
                            type: e.type,
                            link_source: t.isEmpty(e.images) || t.isEmpty(e.images.original) || t.isEmpty(e.images.original.link) || null != e.storageType ? "google_drive" == e.storageType ? e.values.thumbnailLink : "" : e.images.original.link,
                            link_thumb: t.isEmpty(e.images) || t.isEmpty(e.images.original) || t.isEmpty(e.images.original.link) || null != e.storageType ? "google_drive" == e.storageType ? e.values.thumbnailLink : "" : e.images.original.link
                        }
                    }
                    )).toArray()
                },
                learning_material_type: {
                    get: function() {
                        return this.learning_material.type
                    },
                    set: function(t) {
                        this.learning_material.type = t
                    }
                },
                learning_material_status: function() {
                    return this.learning_material.status
                },
                teacher_question_due_date: {
                    get: function() {
                        return !this.isEmpty(this.learning_material.teacherQuestion.dueDate)
                    },
                    set: function(t) {
                        this.setTeacherQuestionFinishedAt()
                    }
                },
                quiz_finished_at: {
                    get: function() {
                        return !this.isEmpty(this.learning_material.quiz.finishedAt)
                    },
                    set: function(t) {
                        this.setQuizFinishedAt()
                    }
                },
                quiz_is_retakeable: {
                    get: function() {
                        return !("Z" != this.learning_material.type || !this.learning_material.quiz.isRetakeable)
                    },
                    set: function(t) {
                        this.learning_material.quiz.isRetakeable = t ? 1 : 0
                    }
                },
                quiz_pause_retake_duration: {
                    get: function() {
                        return parseFloat(this.learning_material.quiz.pauseRetake / 60).toFixed(0)
                    },
                    set: function(t) {
                        var e = this.learning_material.quiz.pauseRetake;
                        t > this.pause_retake_max && (e = this.pause_retake_max),
                        e = parseInt(t) * this.pause_retake_unit,
                        this.learning_material.quiz.pauseRetake = isNaN(e) ? 60 : e
                    }
                },
                quiz_duration: {
                    get: function() {
                        return parseFloat(this.learning_material.quiz.duration / 60).toFixed(0)
                    },
                    set: function(t) {
                        var e = this.learning_material.quiz.duration;
                        t > this.quiz_duration_max && (e = this.quiz_duration_max),
                        e = parseInt(t) * this.quiz_duration_unit,
                        this.learning_material.quiz.duration = isNaN(e) ? 0 : e,
                        this.isEmpty(t) || 0 == t ? this.error_messages.quiz_duration = "Durasi harus diisi" : this.error_messages.quiz_duration = t < 5 || t > 1440 ? "Durasi ".concat(t > 1440 ? "maksimal adalah 1440 menit (24 jam)" : "minimal adalah 5 menit") : null
                    }
                },
                total_quiz_question_scores: function() {
                    return 100
                },
                quiz_grade_limit: {
                    get: function() {
                        return this.isEmpty(this.learning_material.quiz.gradeLimit) ? 0 : this.learning_material.quiz.gradeLimit
                    },
                    set: function(t) {
                        this.learning_material.quiz.gradeLimit = this.isEmpty(t) ? null : parseInt(t)
                    }
                },
                quiz_grade_limit_message: function() {
                    return null == this.quiz_grade_limit || 0 == this.total_quiz_question_scores || this.quiz_grade_limit <= this.total_quiz_question_scores ? null : "number" != typeof this.quiz_grade_limit ? "Silakan masukkan nomor." : this.quiz_grade_limit > this.total_quiz_question_scores ? "Batas nilai maksimal ".concat(this.total_quiz_question_scores, ".") : void 0
                },
                isInteractiveReadyToSave: function() {
                    return !this.isEmpty(this.interactive_questions) && this.interactive_questions.length > 0 && !this.isEmpty(this.learning_material.mediaIds) && this.learning_material.mediaIds > 0
                },
                autoDeleteRecordingDate: function() {
                    var t;
                    if (null !== (t = this.learning_material) && void 0 !== t && t.meetStarted) {
                        var e = moment(this.learning_material.meetStarted);
                        return e.isBefore("2023-03-29T16:40:00+07:00") ? e.add(2, "days").format("Do MMMM YYYY") : e.add(1, "month").format("Do MMMM YYYY")
                    }
                }
            }),
            watch: {
                data_learning_material: function() {
                    this.learning_material = this.initLearningMaterialData()
                },
                learning_material_status: function(t) {
                    "A" == t ? ("Q" == this.learning_material.type && (this.learning_material.teacherQuestion.status = "O"),
                    this.learning_material.publishedAt = null) : "D" == t ? this.edit && (this.learning_material.publishedAt = moment().add(1, "hour").format("YYYY-MM-DD HH:mm:ss")) : this.notify_members = 0
                },
                quiz_is_retakeable: function(t) {
                    t ? (this.learning_material.quiz.maxRetake = 1,
                    this.quiz_pause_retake_duration = 1) : (this.learning_material.quiz.maxRetake = null,
                    this.learning_material.quiz.pauseRetake = null)
                },
                quiz_use_grade_limit: function(t) {
                    t ? this.isEmpty(this.quiz_grade_limit) && (this.quiz_grade_limit = 0) : this.quiz_grade_limit = null
                }
            },
            data: function() {
                var t = this.initLearningMaterialData();
                return {
                    multiple_media: !1,
                    notify_members: 0,
                    edit: ["I", "D"].indexOf(this.data_learning_material.status) > -1 || _.clone(this.default_edit),
                    click_edit: !1,
                    show_quiz_rank: !1,
                    types: [],
                    learning_material: t,
                    old_status: _.clone(t.status),
                    selected_media: null,
                    loading_start_meeting: !1,
                    hover_image: null,
                    quiz_questions: [],
                    pause_retake_unit: 60,
                    quiz_duration_unit: 60,
                    quiz_use_grade_limit: "Z" == t.type && !this.isEmpty(t.quiz.gradeLimit),
                    quiz_duration_max: 1440,
                    pause_retake_max: 1440,
                    error_messages: {
                        quiz_duration: null
                    },
                    loading_redirect_quiz: !1,
                    loading_redirect_interactive: !1,
                    file_limit_zip: 1048576e3,
                    file_size: 0,
                    is_show_confirm_zip: !1,
                    is_warning_zip: !1,
                    is_yet_submited_zip: !1,
                    is_show_search: !1,
                    is_show_search_interactive: !1,
                    answer_sort_by: null,
                    answer_search_keyword: null,
                    answer_interactive_keyword: null,
                    count_member: 0,
                    interactive_questions: [],
                    is_collapse_question_open: null,
                    interactive_player: null,
                    error_load_video_interactive_post: !1
                }
            },
            methods: {
                initLearningMaterialData: function() {
                    var t = _.cloneDeep(this.data_learning_material);
                    return ["I", "D"].indexOf(t.status) > -1 && null === t.publishedAt && (t.status = "A",
                    t.publishedAt = null),
                    t
                },
                getPathSection: function() {
                    var t = "ACADEMIC" == this.group.type ? "classes" : "groups";
                    return "/panel/".concat(t, "/").concat(this.group.id, "/sections/").concat(this.learning_material.section.id)
                },
                exportExcel: function() {
                    this.export(c.j.TEACHER_QUESTION_RESULT(this.learning_material.teacherQuestion.id), "xlsx")
                },
                exportPdf: function() {
                    this.export(c.j.TEACHER_QUESTION_RESULT(this.learning_material.teacherQuestion.id), "pdf")
                },
                onDeletedLearningMaterial: function(data) {
                    var t = "ACADEMIC" == this.group.type ? "classes" : "groups";
                    this.$router.push("/panel/".concat(t, "/").concat(this.$route.params.id, "/sections/").concat(this.$route.params.section_id))
                },
                setQuizFinishedAt: function() {
                    "Z" == this.learning_material.type && (this.isEmpty(this.learning_material.quiz.finishedAt) ? this.learning_material.quiz.finishedAt = moment().add(3, "hour").format("YYYY-MM-DD HH:mm:ss") : this.learning_material.quiz.finishedAt = null)
                },
                setTeacherQuestionFinishedAt: function() {
                    "Q" == this.learning_material.type && (this.isEmpty(this.learning_material.teacherQuestion.dueDate) ? this.learning_material.teacherQuestion.dueDate = moment().add(3, "hour").format("YYYY-MM-DD HH:mm:ss") : this.learning_material.teacherQuestion.dueDate = null)
                },
                setPublishedAt: function() {
                    this.isEmpty(this.learning_material.publishedAt) ? this.learning_material.publishedAt = moment().add(1, "hour").format("YYYY-MM-DD HH:mm:ss") : this.learning_material.publishedAt = null
                },
                onSavedQuiz: function(data) {
                    this.learning_material.quiz = data
                },
                showMediaLibraryModal: function(t) {
                    var e = this;
                    this.types = t,
                    t.indexOf("youtube") > -1 || t.indexOf("video") > -1 ? this.multiple_media = !1 : this.multiple_media = !0,
                    "H" == this.learning_material.type && (this.multiple_media = !1),
                    Vue.nextTick((function() {
                        e.show_media_library_modal = !0
                    }
                    ))
                },
                setDesc: function(text) {
                    this.learning_material.description = text
                },
                onSavedLearningMaterial: function(data) {
                    this.$emit("setLearningMaterial", data),
                    this.edit = !1,
                    "I" == this.old_status && "A" == data.status && this.ga_send_event(this.auth, {
                        dimension8: this.group.id,
                        dimension9: this.group.name,
                        dimension10: this.getGroupType(this.group.type),
                        dimension11: data.data.id,
                        dimension12: data.data.title,
                        dimension13: data.data.type,
                        metric2: 1
                    }),
                    this.onSaved(data)
                },
                onNotSavedLearningMaterial: function(data) {
                    toast.danger(data.applicationSystem.message)
                },
                save: function() {
                    var t = arguments
                      , e = this;
                    return Object(r.a)(regeneratorRuntime.mark((function n() {
                        var r, l, o, data, d, m, _, v, h, f;
                        return regeneratorRuntime.wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (r = t.length > 0 && void 0 !== t[0] ? t[0] : {},
                                    l = !(t.length > 1 && void 0 !== t[1]) || t[1],
                                    o = e,
                                    data = {
                                        title: e.learning_material.title,
                                        description: e.learning_material.description,
                                        media_ids: JSON.stringify(e.learning_material.mediaIds),
                                        status: e.learning_material.status,
                                        published_at: e.learning_material.publishedAt
                                    },
                                    "A" == o.learning_material.status && (data.notify_members = e.notify_members),
                                    "Z" != o.learning_material.type) {
                                        n.next = 40;
                                        break
                                    }
                                    if (!l) {
                                        n.next = 10;
                                        break
                                    }
                                    if (!e.quiz_questions.some((function(t) {
                                        return e.validateQuizQuestion(e.learning_material.quiz, t)
                                    }
                                    ))) {
                                        n.next = 10;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 10:
                                    if (data.quiz_finished_at = e.learning_material.quiz.finishedAt,
                                    data.quiz_show_report_to_members = e.learning_material.quiz.showReportToMembers ? 1 : 0,
                                    data.quiz_type = e.learning_material.quiz.type,
                                    data.quiz_grade_limit = e.quiz_use_grade_limit ? e.quiz_grade_limit : null,
                                    data.quiz_duration = e.learning_material.quiz.duration,
                                    data.quiz_is_retakeable = e.learning_material.quiz.isRetakeable || 1 == e.learning_material.quiz.isRetakeable ? 1 : 0,
                                    data.quiz_max_retake = e.learning_material.quiz.maxRetake,
                                    data.quiz_pause_retake = e.learning_material.quiz.pauseRetake,
                                    data.quiz_camera_track = e.learning_material.quiz.cameraTrack ? 1 : 0,
                                    data.quiz_shuffle_questions = e.learning_material.quiz.shuffleQuestions ? 1 : 0,
                                    !e.learning_material.quiz.isMemberExist) {
                                        n.next = 23;
                                        break
                                    }
                                    return toast.danger("Quiz tidak dapat diubah karena sudah ada peserta yang mengerjakan."),
                                    n.abrupt("return");
                                case 23:
                                    if (!(l && e.quiz_questions.length <= 0)) {
                                        n.next = 26;
                                        break
                                    }
                                    return toast.danger("Pertanyaan harus diisi"),
                                    n.abrupt("return");
                                case 26:
                                    if (!(e.quiz_use_grade_limit && !e.isEmpty(e.quiz_grade_limit) && e.total_quiz_question_scores < e.quiz_grade_limit)) {
                                        n.next = 29;
                                        break
                                    }
                                    return 1 == e.learning_material.quiz.type ? toast.danger("Batas nilai tidak dapat lebih dari ".concat(e.total_quiz_question_scores)) : toast.danger("Batas nilai tidak dapat lebih dari jumlah bobot pertanyaan"),
                                    n.abrupt("return");
                                case 29:
                                    if (!l || 0 != e.learning_material.quiz.type) {
                                        n.next = 33;
                                        break
                                    }
                                    if (e.quiz_questions.every((function(t, e) {
                                        return !(t.score <= 0) || (toast.danger("Bobot Pertanyaan #".concat(e + 1, " harus diisi")),
                                        !1)
                                    }
                                    ))) {
                                        n.next = 33;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 33:
                                    if (1 != data.quiz_is_retakeable) {
                                        n.next = 40;
                                        break
                                    }
                                    if (!(data.quiz_max_retake > 10)) {
                                        n.next = 37;
                                        break
                                    }
                                    return toast.danger("Maksimal quiz diulang tidak bisa lebih dari 10"),
                                    n.abrupt("return");
                                case 37:
                                    if (!(data.quiz_pause_retake > 86400)) {
                                        n.next = 40;
                                        break
                                    }
                                    return toast.danger("Jeda quiz diulang tidak bisa lebih dari 1440 Menit"),
                                    n.abrupt("return");
                                case 40:
                                    if ("Q" == o.learning_material.type && (data.teacher_question_due_at = e.learning_material.teacherQuestion.dueDate,
                                    data.teacher_question_status = e.learning_material.teacherQuestion.status),
                                    "V" == o.learning_material.type && (data.conference_type = o.learning_material.conferenceType),
                                    "GMEET" != (data = T(T({}, data), r)).conference_type) {
                                        n.next = 59;
                                        break
                                    }
                                    return e.loading_save_title = !0,
                                    n.next = 47,
                                    e.$axios.post(c.s.CALENDAR_LIST);
                                case 47:
                                    if (d = n.sent,
                                    e.loading_save_title = !1,
                                    0 === d.data.applicationSystem.code) {
                                        n.next = 59;
                                        break
                                    }
                                    if (h = e.getToken(null !== (m = null === (_ = e.route) || void 0 === _ || null === (v = _.query) || void 0 === v ? void 0 : v.t) && void 0 !== m ? m : e.$cookies.get("token")),
                                    f = h.token,
                                    e.isEmpty(f)) {
                                        n.next = 56;
                                        break
                                    }
                                    e.saveEditDataToCookies(e.learning_material.id, data),
                                    window.location.href = "".concat(e.get_api_url()).concat(c.s.GOOGLE_CALENDAR(f, e.$route.fullPath.slice(1))),
                                    n.next = 58;
                                    break;
                                case 56:
                                    return o.$buefy.toast.open({
                                        message: "Terjadi kesalahan saat menyambungkan akun, silahkan login kembali",
                                        type: "is-danger"
                                    }),
                                    n.abrupt("return");
                                case 58:
                                    return n.abrupt("return");
                                case 59:
                                    return n.abrupt("return", e.saveLearningMaterial(e.learning_material.id, data));
                                case 60:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )))()
                },
                saveEditDataToCookies: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                      , data = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (!this.isEmpty(data) && !this.isEmpty(t)) {
                        var e = {
                            id: t,
                            data: data
                        };
                        this.$cookies.set("_editdata", e)
                    }
                },
                mediaCatcher: function(t) {
                    var e = this.types;
                    if (this.edit) {
                        if ("H" === this.learning_material_type) {
                            var n = t[0];
                            this.error_load_video_interactive_post = !1,
                            parseInt(n.size) > 104857600 && !this.isEmpty(n.storageType) && "google_drive" === n.storageType && (this.error_load_video_interactive_post = !0)
                        }
                        this.deleteVideos();
                        var r = [];
                        t = collect(t).whereIn("type", e),
                        this.isEmpty(t.toArray()) || (r = r.concat(t.pluck("id").toArray()));
                        var l = collect(this.learning_material.medias).whereNotIn("type", e);
                        this.isEmpty(l.toArray()) || (r = r.concat(l.pluck("id").toArray())),
                        this.getSelectedMedias(r),
                        this.show_media_library_modal = !1
                    }
                },
                getSelectedMedias: function(t) {
                    var e = this;
                    this.$axios.post(c.z.GET_SELECTED, {
                        media_ids: t
                    }).then((function(n) {
                        var data = n.data;
                        0 == data.applicationSystem.code && (e.learning_material.medias = data.data,
                        e.learning_material.mediaIds = t),
                        e.setLoadingOff()
                    }
                    )).catch((function() {
                        e.setLoadingOff()
                    }
                    ))
                },
                deleteVideos: function() {
                    this.edit && this.deleteMedia(collect(this.learning_material.medias).filter((function(t) {
                        return ["video", "youtube"].indexOf(t.type) <= -1
                    }
                    )).toArray())
                },
                deleteDocuments: function(t) {
                    this.edit && this.deleteMedia(collect(this.learning_material.medias).filter((function(e) {
                        return e.id != t
                    }
                    )).toArray())
                },
                deleteImages: function(t) {
                    this.edit && this.deleteMedia(collect(this.learning_material.medias).filter((function(e) {
                        return e.id != t
                    }
                    )).toArray())
                },
                deleteMedia: function(t) {
                    var e = this;
                    e.edit && (e.learning_material.medias = t,
                    e.learning_material.mediaIds = collect(t).pluck("id").toArray())
                },
                startMeeting: function() {
                    var t = this;
                    t.loading_start_meeting || (t.loading_start_meeting = !0,
                    this.$axios.post(c.v.START_MEETING, {
                        id: this.learning_material.id
                    }, {
                        timeout: 2e4
                    }).then((function(e) {
                        var data = e.data;
                        0 == data.applicationSystem.code ? t.isEmpty(data.applicationSystem.message) ? window.open(data.data.startUrl, "_blank") : t.$buefy.dialog.confirm({
                            title: "Informasi",
                            message: data.applicationSystem.message,
                            type: "is-info",
                            cancelText: "Batal",
                            confirmText: "Lanjutkan",
                            hasIcon: !0,
                            onConfirm: function() {
                                window.open(data.data.startUrl, "_blank")
                            }
                        }) : toast.danger(data.applicationSystem.message),
                        t.loading_start_meeting = !1
                    }
                    )).catch((function() {
                        t.loading_start_meeting = !1
                    }
                    )))
                },
                onReceiveQuizQuestions: function(t) {
                    this.quiz_questions = t
                },
                showPreview: function(t) {
                    ["document", "link"].indexOf(t.type) > -1 && ("link" != t.type || this.isEmpty(t.link) ? "document" != t.type || "google_drive" != t.storageType || this.isEmpty(t.values) ? "document" != t.type || this.isEmpty(t.file) || this.isEmpty(t.file.link) || this.openDocument(t.file.link) : window.open(t.values.webViewLink, "_blank") : window.open(t.link, "_blank"))
                },
                tryNewQuizView: function() {
                    this.ga_send_event(this.auth, {
                        eventCategory: "quiz_builder",
                        eventAction: "click_try_new_quiz_view"
                    });
                    var t = "/post/".concat(this.learning_material.uuid);
                    ["I", "D"].indexOf(this.data_learning_material.status) > -1 && (t += "?settings=true"),
                    this.$router.push(t)
                },
                setEditMaterial: function() {
                    this.edit = !0,
                    this.click_edit = !0
                },
                isEditAndNotQuizOrQuizNotUserSubbmitted: function() {
                    return this.edit && this.isNotQuizOrQuizNotUserSubbmitted()
                },
                isNotQuizOrQuizNotUserSubbmitted: function() {
                    return "Z" !== this.learning_material.type || "Z" === this.learning_material.type && !this.learning_material.quiz.isMemberExists
                },
                onGetQuizQuestionsSuccess: function(t) {
                    this.quiz_questions = this.isEmpty(t.data) ? [] : t.data
                },
                setupQuiz: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.loading_redirect_quiz) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return t.loading_redirect_quiz = !0,
                                    e.prev = 3,
                                    e.next = 6,
                                    t.save({
                                        status: "A" === t.data_learning_material.status ? t.data_learning_material.status : void 0
                                    }, !1);
                                case 6:
                                    0 == e.sent.applicationSystem.code ? t.$router.push("/post/".concat(t.learning_material.uuid)) : t.loading_redirect_quiz = !1,
                                    e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(3),
                                    t.loading_redirect_quiz = !1;
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[3, 10]])
                    }
                    )))()
                },
                setupInteractiveVideo: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.loading_redirect_interactive) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return t.loading_redirect_interactive = !0,
                                    e.prev = 3,
                                    e.next = 6,
                                    t.save({
                                        status: "A" === t.data_learning_material.status ? t.data_learning_material.status : void 0,
                                        showToast: !1
                                    }, !1);
                                case 6:
                                    0 == e.sent.applicationSystem.code ? (t.loading_redirect_interactive = !1,
                                    n = "ACADEMIC" == t.group.type ? "classes" : "groups",
                                    t.$router.push({
                                        name: "panel-".concat(n, "-id-sections-section_id-learningmaterial_id-interactive_post"),
                                        params: T({}, t.$route.params)
                                    })) : t.loading_redirect_interactive = !1,
                                    e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(3),
                                    t.loading_redirect_interactive = !1;
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[3, 10]])
                    }
                    )))()
                },
                getFileSize: function() {
                    var t = this;
                    this.$axios.post(c.X.GET_FILE_SIZE(this.learning_material.teacherQuestion.id)).then((function(e) {
                        var data = e.data;
                        0 == data.applicationSystem.code && (t.file_size = data.data.total)
                    }
                    ))
                },
                validateDownload: function() {
                    parseInt(this.file_size) > this.file_limit_zip ? this.is_warning_zip = !0 : parseInt(this.count_member) <= 0 ? this.is_yet_submited_zip = !0 : this.is_show_confirm_zip = !0
                },
                setCountMember: function(data) {
                    this.count_member = data
                },
                changeMedias: function() {
                    this.showMediaLibraryModal(["video", "youtube"])
                },
                getDetailInteractivePost: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n, data;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.$axios.post(c.t.DETAIL(t.learning_material.id));
                                case 2:
                                    n = e.sent,
                                    0 == (data = n.data).applicationSystem.code && (t.interactive_questions = data.data.interactivePost.questions);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                setInteractivePlayer: function(t) {
                    this.interactive_player = t
                },
                showInteractiveQuestion: function(t) {
                    this.interactive_player.play(),
                    this.interactive_player.currentTime = this.playerDurationToSeconds(t.showOnMinute)
                },
                toEvaluationPage: function() {
                    var t = "ACADEMIC" == this.group.type ? "classes" : "groups";
                    this.$router.push({
                        name: "panel-".concat(t, "-id-sections-section_id-learningmaterial_id-interactive_post_evaluation"),
                        params: T({}, this.$route.params)
                    })
                },
                downloadAsZip: function(t) {
                    var e, n, r, l = this.getToken(null !== (e = null === (n = this.route) || void 0 === n || null === (r = n.query) || void 0 === r ? void 0 : r.t) && void 0 !== e ? e : this.$cookies.get("token")).token;
                    l || (window.location.href = "/login"),
                    window.open("https://api.edlink.id/api/v1.4" + c.X.DOWNLOAD_ZIP(t) + "?token=".concat(l), "_blank"),
                    this.is_show_confirm_zip = !1
                }
            }
        }
          , $ = O
          , L = (n(1038),
        Object(v.a)($, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [t.isEmpty(t.learning_material) ? n("div", {
                staticClass: "box"
            }, [n("p", [t._v("Data tidak ditemukan.")])]) : n("div", [n("div", {
                staticClass: "card is-boxed",
                class: {
                    "is-disabled": t.loading_save_title
                },
                staticStyle: {
                    "margin-bottom": "15px"
                }
            }, [n("header", {
                staticClass: "card-header"
            }, [n("p", {
                staticClass: "card-header-title"
            }, [t._v("Info Bahan Pembelajaran")]), t._v(" "), t.edit ? t._e() : n("a", {
                staticClass: "card-header-icon font-14",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.setEditMaterial.apply(null, arguments)
                    }
                }
            }, [n("i", {
                staticClass: "fas fa-edit"
            }), t._v(" Ubah\n        ")]), t._v(" "), t.edit ? n("a", {
                staticClass: "card-header-icon font-14 has-text-primary",
                class: {
                    "is-disabled": t.loading_save_title || "H" === t.learning_material.type && !t.isInteractiveReadyToSave
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.save.apply(null, arguments)
                    }
                }
            }, [t.loading_save_title ? n("i", {
                staticClass: "fas fa-spinner fa-spin"
            }) : n("span", [n("i", {
                staticClass: "fas fa-save"
            }), t._v(" Simpan")])]) : t._e(), t._v(" "), t.edit ? t._e() : n("a", {
                staticClass: "card-header-icon font-14 has-text-danger",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.deleteLearningMaterial(t.learning_material.id)
                    }
                }
            }, [n("i", {
                staticClass: "fas fa-trash"
            }), t._v(" Hapus\n        ")])]), t._v(" "), n("div", {
                staticClass: "card-content"
            }, [n("div", ["Z" === t.learning_material.type && t.learning_material.quiz.isMemberExists ? n("edit-disabled-notification") : t._e(), t._v(" "), !t.edit || t.isEditAndNotQuizOrQuizNotUserSubbmitted() ? n("b-field", {
                attrs: {
                    label: "Judul"
                }
            }, [n("b-input", {
                attrs: {
                    expanded: "",
                    disabled: !t.edit,
                    maxlength: "255",
                    required: ""
                },
                model: {
                    value: t.learning_material.title,
                    callback: function(e) {
                        t.$set(t.learning_material, "title", e)
                    },
                    expression: "learning_material.title"
                }
            })], 1) : t._e(), t._v(" "), ["V"].indexOf(t.learning_material.type) > -1 && "GMEET" == t.learning_material.conferenceType && !t.isEmpty(t.learning_material.section) && !t.edit ? n("div", {
                staticClass: "columns"
            }, [n("div", {
                staticClass: "column is-full"
            }, [n("div", {
                staticClass: "field"
            }, [t._m(0), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("p", {
                staticClass: "font-poppins font-16 has-text-neutralgray3"
            }, [t._v("Sesi " + t._s(t.learning_material.section.meet) + " • " + t._s(t.dateSectionFormat(t.learning_material.section.startedAt, t.learning_material.section.endedAt)))])])])])]) : t._e(), t._v(" "), "V" == t.learning_material.type && t.canIntegrateGoogleMeet && t.edit ? n("div", {
                staticClass: "columns"
            }, [n("div", {
                staticClass: "column is-12"
            }, [n("div", {
                staticClass: "field"
            }, [t._m(1), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("div", [t.click_edit ? n("div", {
                staticClass: "box is-boxed-3 has-background-pastelred has-text-darkblue",
                staticStyle: {
                    display: "flex",
                    "flex-direction": "row",
                    "align-items": "center"
                }
            }, [t._m(2), t._v(" "), n("p", [t._v("Pilihan Media Conference tidak dapat diubah.")])]) : t._e(), t._v(" "), n("div", {
                staticClass: "columns"
            }, [n("div", {
                staticClass: "column is-4"
            }, [n("div", {
                staticClass: "field box is-boxed-3",
                staticStyle: {
                    display: "flex",
                    "flex-direction": "row",
                    "align-items": "center",
                    padding: "1.15rem 1rem"
                }
            }, [n("b-radio", {
                staticClass: "font-16 has-text-black",
                attrs: {
                    name: "conference_type",
                    "native-value": "ZOOM",
                    disabled: t.click_edit
                },
                model: {
                    value: t.learning_material.conferenceType,
                    callback: function(e) {
                        t.$set(t.learning_material, "conferenceType", e)
                    },
                    expression: "learning_material.conferenceType"
                }
            }, [t._v("\n                              Zoom\n                          ")])], 1)]), t._v(" "), n("div", {
                staticClass: "column is-4"
            }, [n("div", {
                staticClass: "field box is-boxed-3",
                staticStyle: {
                    display: "flex",
                    "flex-direction": "row",
                    "align-items": "center"
                }
            }, [n("b-radio", {
                staticClass: "font-16 has-text-black",
                attrs: {
                    name: "conference_type",
                    "native-value": "GMEET",
                    disabled: t.click_edit
                },
                model: {
                    value: t.learning_material.conferenceType,
                    callback: function(e) {
                        t.$set(t.learning_material, "conferenceType", e)
                    },
                    expression: "learning_material.conferenceType"
                }
            }, [t._v("\n                              Google Meet\n                          ")]), t._v(" "), n("span", {
                staticClass: "button is-primary5 is-small font-w-500 font-12",
                staticStyle: {
                    "border-radius": "4px",
                    "margin-left": "10px"
                }
            }, [t._v("Baru")])], 1)])])])])])])]) : t._e(), t._v(" "), t.isEditAndNotQuizOrQuizNotUserSubbmitted() ? n("div", {
                staticClass: "columns"
            }, [n("div", {
                staticClass: "column is-6"
            }, [n("div", {
                staticClass: "field"
            }, [n("label", {
                staticClass: "label"
            }, [n("span", [t._v("Kapan " + t._s(t.getPostTypes(t.learning_material.type)) + " akan\n                    dibagikan?")])]), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("div", [n("div", {
                staticClass: "columns is-gapless"
            }, [n("div", {
                staticClass: "column"
            }, [n("b-field", [n("b-radio-button", {
                attrs: {
                    "native-value": "A",
                    type: "is-primary",
                    size: "is-small"
                },
                model: {
                    value: t.learning_material.status,
                    callback: function(e) {
                        t.$set(t.learning_material, "status", e)
                    },
                    expression: "learning_material.status"
                }
            }, [n("span", {
                staticClass: "icon"
            }, [n("i", {
                staticClass: "fa fa-check"
            })]), t._v(" "), n("span", [t._v("Sekarang")])]), t._v(" "), n("b-radio-button", {
                staticStyle: {
                    "margin-left": "7px"
                },
                attrs: {
                    "native-value": "D",
                    type: "is-light",
                    size: "is-small"
                },
                model: {
                    value: t.learning_material.status,
                    callback: function(e) {
                        t.$set(t.learning_material, "status", e)
                    },
                    expression: "learning_material.status"
                }
            }, [n("span", {
                staticClass: "icon"
            }, [n("i", {
                staticClass: "fas fa-clock has-text-primary"
            })]), t._v(" "), n("span", {
                staticClass: "has-text-primary"
            }, [t._v("Nanti")])])], 1)], 1)])])])])]), t._v(" "), "D" == t.learning_material.status ? n("div", {
                staticClass: "column is-6"
            }, [n("div", {
                staticClass: "field"
            }, [t._m(3), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("datetime-picker", {
                attrs: {
                    datetime: t.learning_material.publishedAt,
                    onChange: function(e) {
                        return t.learning_material.publishedAt = e
                    }
                }
            })], 1)])]) : t._e()]) : t._e(), t._v(" "), t.edit ? t._e() : n("div", {
                staticClass: "field"
            }, [n("label", {
                staticClass: "label"
            }, [t._v("Bagikan " + t._s(t.getPostTypes(t.learning_material.type)))]), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("div", [n("div", {
                staticClass: "columns"
            }, [n("div", {
                staticClass: "column"
            }, ["A" == t.learning_material.status ? n("span", {
                staticClass: "has-text-primary"
            }, [t._m(4), t._v(" "), n("span", [t._v("Dibagikan")])]) : t._e(), t._v(" "), "D" == t.learning_material.status ? n("span", {
                staticClass: "has-text-warning"
            }, [t._m(5), t._v(" "), n("span", [t._v("Belum Dibagikan")])]) : t._e()])])])]), t._v(" "), t.edit && "D" == t.learning_material.status ? n("div", {
                staticClass: "column"
            }, [n("div", {
                staticClass: "field"
            }, [n("label", {
                staticClass: "label"
            }, [t._v("Jadwalkan, Pilih Tanggal & Waktu")]), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("div", {
                staticClass: "columns is-mobile is-gapless"
            }, [n("div", {
                staticClass: "column is-narrow"
            }, [n("button", {
                staticClass: "button",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.setPublishedAt.apply(null, arguments)
                    }
                }
            }, [n("span", {
                staticClass: "icon tooltip",
                attrs: {
                    "data-tooltip": "Jangan jadwalkan"
                }
            }, [t.isEmpty(t.learning_material.publishedAt) ? n("i", {
                staticClass: "fas fa-clock"
            }) : n("i", {
                staticClass: "fas fa-times has-text-danger"
            })]), t._v(" "), t.isEmpty(t.learning_material.publishedAt) ? n("span", {
                staticClass: "tooltip",
                attrs: {
                    "data-tooltip": "Jadwalkan"
                }
            }, [t._v("Jadwalkan")]) : t._e()])]), t._v(" "), t.isEmpty(t.learning_material.publishedAt) ? t._e() : n("div", {
                staticClass: "column",
                staticStyle: {
                    "margin-left": "10px"
                }
            }, [n("datetime-picker", {
                attrs: {
                    datetime: t.learning_material.publishedAt,
                    onChange: function(e) {
                        t.learning_material.publishedAt = e
                    }
                }
            })], 1)])])])]) : t._e()]), t._v(" "), t.edit || "D" != t.learning_material.status || t.isEmpty(t.learning_material.publishedAt) ? t._e() : n("div", {
                staticClass: "field"
            }, [n("label", {
                staticClass: "label"
            }, [t._v(t._s(t.getPostTypes(t.learning_material.type)) + " akan dibagikan\n              pada")]), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("div", {
                staticClass: "columns"
            }, [n("div", {
                staticClass: "column"
            }, [n("p", [t._v(t._s(t.getFormattedDate(t.learning_material.publishedAt)))])]), t._v(" "), n("div", {
                staticClass: "column is-narrow"
            }, [n("vcountdown", {
                attrs: {
                    finished: t.learning_material.publishedAt
                }
            })], 1)])])]), t._v(" "), "Q" == t.learning_material.type && t.edit ? n("div", {
                staticClass: "columns is-vcentered"
            }, [n("div", {
                staticClass: "column is-6"
            }, [n("div", {
                staticClass: "field"
            }, [t._m(6), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("b-switch", {
                model: {
                    value: t.teacher_question_due_date,
                    callback: function(e) {
                        t.teacher_question_due_date = e
                    },
                    expression: "teacher_question_due_date"
                }
            }, [t._v(t._s(t.teacher_question_due_date ? "Ya" : "Tidak"))])], 1)])]), t._v(" "), t.teacher_question_due_date ? n("div", {
                staticClass: "column is-6"
            }, [n("div", {
                staticClass: "field"
            }, [t._m(7), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("datetime-picker", {
                attrs: {
                    datetime: t.learning_material.teacherQuestion.dueDate,
                    onChange: function(e) {
                        return t.learning_material.teacherQuestion.dueDate = e
                    }
                }
            })], 1)])]) : t._e()]) : t._e(), t._v(" "), "Q" != t.learning_material.type || t.edit ? t._e() : n("div", {
                staticClass: "field"
            }, [n("label", {
                staticClass: "label"
            }, [t._v("Tanggal & Waktu Selesai")]), t._v(" "), n("div", {
                staticClass: "control"
            }, [t.isEmpty(t.learning_material.teacherQuestion.dueDate) ? n("span", [t._v("-")]) : n("span", [n("div", {
                staticClass: "columns is-vcentered"
            }, [n("div", {
                staticClass: "column"
            }, [t._v("\n                    " + t._s(t.getFormattedDate(t.learning_material.teacherQuestion.dueDate))), n("br")]), t._v(" "), n("div", {
                staticClass: "column is-narrow"
            }, ["O" == t.learning_material.teacherQuestion.status ? n("vcountdown", {
                attrs: {
                    finished: t.learning_material.teacherQuestion.dueDate
                }
            }) : n("span", {
                staticClass: "has-text-success"
            }, [t._v("SELESAI")])], 1)])])])]), t._v(" "), ["M", "Q"].indexOf(t.learning_material.type) > -1 ? n("div", {
                staticClass: "field"
            }, [t._m(8), t._v(" "), n("div", {
                staticClass: "control"
            }, [t.edit ? n("div", [n("div", {
                staticClass: "tile is-ancestor has-text-centered",
                staticStyle: {
                    "flex-wrap": "wrap"
                }
            }, t._l(t.images, (function(img, e) {
                return n("div", {
                    key: e,
                    staticClass: "tile is-parent is-4"
                }, [n("div", {
                    staticClass: "tile is-child box is-relative",
                    staticStyle: {
                        padding: "0"
                    },
                    on: {
                        mouseenter: function(e) {
                            t.hover_image = img.id
                        },
                        mouseleave: function(e) {
                            t.hover_image = null
                        },
                        click: function(t) {
                            t.preventDefault()
                        }
                    }
                }, [t.hover_image == img.id ? n("div", {
                    staticClass: "overlay"
                }, [n("div", {
                    staticClass: "columns is-vcentered",
                    staticStyle: {
                        margin: "0",
                        height: "100%"
                    }
                }, [n("div", {
                    staticClass: "column"
                }, [n("button", {
                    staticClass: "button is-danger",
                    on: {
                        click: function(e) {
                            return e.preventDefault(),
                            t.deleteImages(img.id)
                        }
                    }
                }, [t._m(9, !0)])])])]) : t._e(), t._v(" "), n("figure", {
                    staticClass: "image"
                }, [n("img", {
                    attrs: {
                        src: null == img.storageType ? img.images.thumb.link : img.values.thumbnailLink,
                        alt: ""
                    }
                })])])])
            }
            )), 0), t._v(" "), n("div", {
                staticClass: "notification has-text-centered",
                staticStyle: {
                    border: "1px solid lightgrey",
                    "border-style": "dashed",
                    padding: "1.25rem"
                }
            }, [n("a", {
                staticClass: "has-text-primary",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.showMediaLibraryModal(["image"])
                    }
                }
            }, [t._v("Tambahkan Gambar")])])]) : t.edit || t.isEmpty(t.images) ? n("div", {
                staticClass: "has-text-grey"
            }, [t._v("Tidak ada gambar")]) : n("div", [n("custom-carousel", {
                staticStyle: {
                    margin: "0"
                },
                attrs: {
                    items: t.carousel_items
                }
            })], 1)])]) : t._e(), t._v(" "), ["M", "Q"].indexOf(t.learning_material.type) > -1 ? n("div", {
                staticClass: "field"
            }, [n("label", {
                staticClass: "label"
            }, [n("span", [t._v("Video")]), t._v(" "), !t.isEmpty(t.videos) && t.edit ? n("span", [n("button", {
                staticClass: "button is-text is-small has-text-danger",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.deleteVideos.apply(null, arguments)
                    }
                }
            }, [t._m(10), t._v(" "), n("span", [t._v("Hapus")])])]) : t._e()]), t._v(" "), n("div", {
                staticClass: "control"
            }, [t.loading_save_video ? n("div", [n("spinner-loading")], 1) : t.isEmpty(t.videos) ? t.isEmpty(t.videos) && t.edit ? n("div", {
                staticClass: "notification has-text-centered",
                staticStyle: {
                    border: "1px solid lightgrey",
                    "border-style": "dashed",
                    padding: "1.25rem"
                }
            }, [n("a", {
                staticClass: "has-text-primary",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.showMediaLibraryModal(["video", "youtube"])
                    }
                }
            }, [t._v("Tambahkan Video")])]) : n("div", {
                staticClass: "has-text-grey"
            }, [t._v("Tidak ada video")]) : n("div", [n("video-manager", {
                attrs: {
                    videos: t.videos
                }
            })], 1)])]) : t._e(), t._v(" "), ["M", "Q"].indexOf(t.learning_material.type) > -1 ? n("div", {
                staticClass: "field"
            }, [t._m(11), t._v(" "), n("div", {
                staticClass: "control"
            }, [t.loading_save_document ? n("div", [n("spinner-loading")], 1) : t.isEmpty(t.documents_and_others) ? !t.edit && t.isEmpty(t.documents) ? n("div", {
                staticClass: "has-text-grey"
            }, [t._v("\n                Tidak ada dokumen\n              ")]) : t._e() : n("div", [n("div", {
                staticClass: "middle-content"
            }, [n("div", {
                staticClass: "tugas__content-timeline"
            }, [n("div", {
                staticClass: "content",
                staticStyle: {
                    padding: "0",
                    border: "none",
                    margin: "0"
                }
            }, [n("div", {
                staticClass: "keterangan",
                staticStyle: {
                    margin: "0",
                    width: "100%"
                }
            }, t._l(t.documents_and_others, (function(e, r) {
                return n("div", {
                    key: r,
                    staticClass: "file-download",
                    staticStyle: {
                        padding: "5px 0.65rem"
                    },
                    style: 0 == r ? "margin-top: 0 !important;" : "margin-top: 7px !important;"
                }, [n("div", {
                    staticClass: "columns is-vcentered is-gapless",
                    staticStyle: {
                        margin: "0 auto",
                        width: "100%"
                    }
                }, [n("div", {
                    staticClass: "column is-narrow"
                }, [n("icon-collection", {
                    attrs: {
                        media: e,
                        size: "is-24x24"
                    }
                })], 1), t._v(" "), n("div", {
                    staticClass: "column",
                    staticStyle: {
                        "line-height": "1",
                        "padding-left": "10px !important",
                        "padding-right": "10px !important"
                    }
                }, [n("a", {
                    staticClass: "font-12",
                    attrs: {
                        href: ""
                    },
                    on: {
                        click: function(n) {
                            return n.preventDefault(),
                            t.showPreview(e)
                        }
                    }
                }, [t._v(t._s(e.name))])]), t._v(" "), n("div", {
                    staticClass: "column is-narrow"
                }, [!t.isEmpty(t.auth) && ["O", "A", "M"].indexOf(t.group.memberRole) > -1 ? n("button", {
                    staticClass: "button is-text",
                    on: {
                        click: function(n) {
                            return n.preventDefault(),
                            t.download(e, t.group.id)
                        }
                    }
                }, [t._v("\n                                Unduh\n                              ")]) : t._e()]), t._v(" "), t.edit ? n("div", {
                    staticClass: "column is-narrow"
                }, [!t.isEmpty(t.auth) && ["O", "A"].indexOf(t.group.memberRole) > -1 ? n("button", {
                    staticClass: "button is-text has-text-danger",
                    on: {
                        click: function(n) {
                            return n.preventDefault(),
                            t.deleteDocuments(e.id)
                        }
                    }
                }, [t._m(12, !0)]) : t._e()]) : t._e()])])
            }
            )), 0)])])])]), t._v(" "), t.edit ? n("div", {
                staticClass: "notification has-text-centered",
                staticStyle: {
                    border: "1px solid lightgrey",
                    "border-style": "dashed",
                    padding: "1.25rem",
                    "margin-top": "10px"
                }
            }, [n("a", {
                staticClass: "has-text-primary",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.showMediaLibraryModal(["document", "other"])
                    }
                }
            }, [t._v("Tambahkan Dokumen")])]) : t._e()])]) : t._e(), t._v(" "), "Z" != t.learning_material.type || t.edit && !t.isEditAndNotQuizOrQuizNotUserSubbmitted() ? t._e() : n("div", {
                staticClass: "columns"
            }, [n("div", {
                staticClass: "column"
            }, [n("b-field", {
                attrs: {
                    label: "Indikator Penilaian"
                }
            }, [n("div", [t.isEditAndNotQuizOrQuizNotUserSubbmitted() ? n("b-field", {
                staticStyle: {
                    "margin-bottom": "0"
                }
            }, [n("b-radio", {
                attrs: {
                    "native-value": 0
                },
                model: {
                    value: t.learning_material.quiz.type,
                    callback: function(e) {
                        t.$set(t.learning_material.quiz, "type", e)
                    },
                    expression: "learning_material.quiz.type"
                }
            }, [t._v("Bobot per soal:\n                      "), n("small", [t._v("(Nilai bobot per soal ditentukan secara\n                        manual)")])])], 1) : t._e(), t._v(" "), t.isEditAndNotQuizOrQuizNotUserSubbmitted() ? n("b-field", {
                staticStyle: {
                    "margin-bottom": "0"
                }
            }, [n("b-radio", {
                staticStyle: {
                    "margin-left": "0"
                },
                attrs: {
                    "native-value": 1
                },
                model: {
                    value: t.learning_material.quiz.type,
                    callback: function(e) {
                        t.$set(t.learning_material.quiz, "type", e)
                    },
                    expression: "learning_material.quiz.type"
                }
            }, [t._v("Bobot otomatis:\n                      "), n("small", [t._v("(Sistem otomatis membagi nilai bobot per soal)")])])], 1) : t._e(), t._v(" "), t.edit ? t._e() : n("div", [0 == t.learning_material.quiz.type ? n("span", [t._v("Bobot per soal: Nilai bobot per soal ditentukan secara\n                      manual")]) : 1 == t.learning_material.quiz.type ? n("span", [t._v("Bobot otomatis: Sistem otomatis membagi nilai bobot per\n                      soal")]) : t._e()])], 1)])], 1)]), t._v(" "), "Z" == t.learning_material.type ? n("div", {
                staticClass: "columns is-multiline"
            }, [t.edit ? n("div", {
                staticClass: "column is-6"
            }, [n("b-field", {
                attrs: {
                    label: "Batas Nilai"
                }
            }, [n("b-switch", {
                model: {
                    value: t.quiz_use_grade_limit,
                    callback: function(e) {
                        t.quiz_use_grade_limit = e
                    },
                    expression: "quiz_use_grade_limit"
                }
            }, [t._v(t._s(t.quiz_use_grade_limit ? "Ya" : "Tidak"))])], 1)], 1) : t._e(), t._v(" "), t.quiz_use_grade_limit ? n("div", {
                staticClass: "column is-6"
            }, [n("b-field", {
                attrs: {
                    label: "Batas Nilai Minimal Lulus (Max: " + t.total_quiz_question_scores + ")"
                }
            }, [null != t.quiz_grade_limit_message ? n("p", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [t._v(t._s(t.quiz_grade_limit_message))]) : t._e(), t._v(" "), t.edit ? n("div", [n("b-numberinput", {
                attrs: {
                    min: 1,
                    max: t.total_quiz_question_scores,
                    expanded: "",
                    controls: !1
                },
                model: {
                    value: t.quiz_grade_limit,
                    callback: function(e) {
                        t.quiz_grade_limit = e
                    },
                    expression: "quiz_grade_limit"
                }
            })], 1) : n("div", [n("span", [t._v(t._s(t.quiz_grade_limit))])])])], 1) : t._e()]) : t._e(), t._v(" "), "Z" != t.learning_material.type || t.edit && !t.isEditAndNotQuizOrQuizNotUserSubbmitted() ? t._e() : n("div", {
                staticClass: "columns"
            }, [n("div", {
                staticClass: "column is-6"
            }, [n("div", {
                staticClass: "field"
            }, [t._m(13), t._v(" "), t.isEditAndNotQuizOrQuizNotUserSubbmitted() ? n("div", {
                staticClass: "field-body",
                staticStyle: {
                    display: "inherit"
                }
            }, [n("div", {
                staticClass: "field has-addons"
            }, [n("b-input", {
                attrs: {
                    type: "number",
                    min: 5,
                    max: 1440,
                    required: ""
                },
                model: {
                    value: t.quiz_duration,
                    callback: function(e) {
                        t.quiz_duration = e
                    },
                    expression: "quiz_duration"
                }
            }), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("span", {
                staticClass: "button is-static"
            }, [t._v("Menit"), t.learning_material.quiz.duration >= 3600 ? n("span", {
                staticClass: "font-w-700 has-text-info"
            }, [t._v(" => " + t._s(t.secondsToHms(t.learning_material.quiz.duration)))]) : t._e()])])], 1), t._v(" "), t.isEmpty(t.error_messages.quiz_duration) ? t._e() : n("span", {
                staticClass: "help has-text-danger",
                staticStyle: {
                    "margin-top": "6px",
                    "font-weight": "400"
                }
            }, [t._v("\n                    " + t._s(t.error_messages.quiz_duration) + "\n                  ")])]) : n("div", {
                staticClass: "control"
            }, [n("span", [t._v(t._s(t.isEmpty(t.learning_material.quiz.duration) ? 0 : t.secondsToHms(t.learning_material.quiz.duration)))])])])])]), t._v(" "), "Z" == t.learning_material.type && t.quiz_use_grade_limit ? n("div", {
                staticClass: "columns"
            }, [n("div", {
                staticClass: "column is-4"
            }, [n("div", {
                staticClass: "field"
            }, [t._m(14), t._v(" "), n("div", {
                staticClass: "control"
            }, [t.edit ? n("b-switch", {
                model: {
                    value: t.quiz_is_retakeable,
                    callback: function(e) {
                        t.quiz_is_retakeable = e
                    },
                    expression: "quiz_is_retakeable"
                }
            }, [t._v(t._s(t.quiz_is_retakeable ? "Ya" : "Tidak"))]) : n("span", [t._v(t._s(t.quiz_is_retakeable ? "Ya" : "Tidak"))])], 1)])]), t._v(" "), t.quiz_is_retakeable ? n("div", {
                staticClass: "column is-4"
            }, [n("div", {
                staticClass: "field"
            }, [t._m(15), t._v(" "), n("div", {
                staticClass: "control"
            }, [t.edit ? n("div", [n("b-input", {
                attrs: {
                    type: "number",
                    max: "10",
                    min: "1",
                    expanded: "",
                    placeholder: "0 - 10"
                },
                model: {
                    value: t.learning_material.quiz.maxRetake,
                    callback: function(e) {
                        t.$set(t.learning_material.quiz, "maxRetake", e)
                    },
                    expression: "learning_material.quiz.maxRetake"
                }
            })], 1) : n("div", [n("span", [t._v(t._s(t.learning_material.quiz.maxRetake) + " kali")])])])])]) : t._e(), t._v(" "), t.quiz_is_retakeable ? n("div", {
                staticClass: "column is-4"
            }, [n("div", {
                staticClass: "field"
            }, [t._m(16), t._v(" "), t.edit ? n("div", {
                staticClass: "field-body"
            }, [n("div", {
                staticClass: "field has-addons"
            }, [n("b-input", {
                attrs: {
                    type: "number",
                    min: 1,
                    max: 1440,
                    expanded: "",
                    required: ""
                },
                model: {
                    value: t.quiz_pause_retake_duration,
                    callback: function(e) {
                        t.quiz_pause_retake_duration = e
                    },
                    expression: "quiz_pause_retake_duration"
                }
            }), t._v(" "), t._m(17)], 1)]) : n("div", {
                staticClass: "control"
            }, [n("span", [t._v(t._s(t.isEmpty(t.learning_material.quiz.pauseRetake) ? 0 : t.secondsToHms(t.learning_material.quiz.pauseRetake)))])])])]) : t._e()]) : t._e(), t._v(" "), "Z" == t.learning_material.type && t.edit ? n("div", {
                staticClass: "columns"
            }, [n("div", {
                staticClass: "column is-6"
            }, [n("div", {
                staticClass: "field"
            }, [t._m(18), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("b-switch", {
                model: {
                    value: t.quiz_finished_at,
                    callback: function(e) {
                        t.quiz_finished_at = e
                    },
                    expression: "quiz_finished_at"
                }
            }, [t._v(t._s(t.quiz_finished_at ? "Ya" : "Tidak"))])], 1)])]), t._v(" "), "Z" == t.learning_material.type && t.quiz_finished_at ? n("div", {
                staticClass: "column is-6"
            }, [n("div", {
                staticClass: "field"
            }, [t._m(19), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("datetime-picker", {
                attrs: {
                    datetime: t.learning_material.quiz.finishedAt,
                    onChange: function(e) {
                        return t.learning_material.quiz.finishedAt = e
                    }
                }
            })], 1)])]) : t._e()]) : t._e(), t._v(" "), "Z" != t.learning_material.type || t.edit ? t._e() : n("div", {
                staticClass: "field"
            }, [n("label", {
                staticClass: "label"
            }, [t._v("Batas Waktu")]), t._v(" "), n("div", {
                staticClass: "control"
            }, [t.isEmpty(t.learning_material.quiz.finishedAt) ? n("span", [t._v("-")]) : n("span", [n("div", {
                staticClass: "columns"
            }, [n("div", {
                staticClass: "column"
            }, [t._v("\n                    " + t._s(t.getFormattedDate(t.learning_material.quiz.finishedAt)) + "\n                  ")]), t._v(" "), n("div", {
                staticClass: "column has-text-right"
            }, [n("vcountdown", {
                attrs: {
                    finished: t.learning_material.quiz.finishedAt
                }
            })], 1)])])])]), t._v(" "), "Z" != t.learning_material.type || t.edit && !t.isEditAndNotQuizOrQuizNotUserSubbmitted() || !t.group.accessProctoring ? t._e() : n("div", {
                staticClass: "columns",
                class: {
                    "is-disabled": t.quiz_duration < 10
                }
            }, [n("div", {
                staticClass: "column is-12"
            }, [n("div", {
                staticClass: "field"
            }, [n("label", {
                staticClass: "label"
            }, [n("b-tooltip", {
                attrs: {
                    label: "Proctoring adalah sebuah sistem pengawasan online yang dilakukan dengan cara merekam aktivitas yang dilakukan oleh peserta ujian, baik layar komputer yang digunakan, maupun wajah peserta ujian melalui webcam",
                    multilined: "",
                    type: "is-dark"
                }
            }, [n("span", [t._v("Proctoring "), n("span", {
                staticClass: "tag is-info"
            }, [t._v("Baru")]), t._v(" "), n("b-icon", {
                attrs: {
                    icon: "help-circle",
                    size: "is-small"
                }
            })], 1)]), t._v(" "), t.edit ? n("span", [n("br"), n("span", {
                staticClass: "help has-text-grey",
                staticStyle: {
                    "margin-top": "0",
                    "font-weight": "400"
                }
            }, [t._v("Durasi pengerjaan minimal 10 menit")])]) : t._e()], 1), t._v(" "), n("div", {
                staticClass: "control"
            }, [t.edit ? n("div", [n("b-switch", {
                model: {
                    value: t.learning_material.quiz.cameraTrack,
                    callback: function(e) {
                        t.$set(t.learning_material.quiz, "cameraTrack", e)
                    },
                    expression: "learning_material.quiz.cameraTrack"
                }
            }, [t._v(t._s(t.learning_material.quiz.cameraTrack ? "Ya" : "Tidak"))])], 1) : n("div", [n("span", [t._v(t._s(t.learning_material.quiz.cameraTrack ? "Ya" : "Tidak"))])])])])])]), t._v(" "), n("div", {
                staticClass: "columns"
            }, [n("div", {
                staticClass: "column"
            }, ["Z" == t.learning_material.type && t.canAccessQuizResult ? n("div", {
                staticClass: "field"
            }, [n("label", {
                staticClass: "label"
            }, [t._v("Tampilkan laporan kepada peserta setelah quiz selesai?")]), t._v(" "), n("div", {
                staticClass: "control"
            }, [t.edit ? n("div", [n("b-switch", {
                model: {
                    value: t.learning_material.quiz.showReportToMembers,
                    callback: function(e) {
                        t.$set(t.learning_material.quiz, "showReportToMembers", e)
                    },
                    expression: "learning_material.quiz.showReportToMembers"
                }
            }, [t._v(t._s(!t.isEmpty(t.learning_material.quiz.showReportToMembers) && t.learning_material.quiz.showReportToMembers ? "Ditampilkan" : "Tidak ditampilkan"))])], 1) : n("div", [t.learning_material.quiz.showReportToMembers ? n("span", {
                staticClass: "has-text-info"
            }, [t._m(20), t._v(" "), n("span", [t._v("Ditampilkan")])]) : n("span", {
                staticClass: "has-text-grey"
            }, [t._m(21), t._v(" "), n("span", [t._v("Tidak Ditampilkan")])])])])]) : t._e()])]), t._v(" "), "Z" == t.learning_material.type ? n("div", {
                staticClass: "field"
            }, [t._m(22), t._v(" "), n("p", {
                staticClass: "help",
                staticStyle: {
                    "margin-bottom": "0.5em",
                    "margin-top": "0"
                }
            }, [t._v("Pertanyaan akan diacak setiap kali peserta memuat halaman quiz")]), t._v(" "), n("div", {
                staticClass: "control"
            }, [t.edit ? n("div", [n("b-switch", {
                model: {
                    value: t.learning_material.quiz.shuffleQuestions,
                    callback: function(e) {
                        t.$set(t.learning_material.quiz, "shuffleQuestions", e)
                    },
                    expression: "learning_material.quiz.shuffleQuestions"
                }
            }, [t._v(t._s(!t.isEmpty(t.learning_material.quiz.shuffleQuestions) && t.learning_material.quiz.shuffleQuestions ? "Ya" : "Tidak"))])], 1) : n("div", [t.learning_material.quiz.shuffleQuestions ? n("span", [n("span", [t._v("Ya")])]) : n("span", {
                staticClass: "has-text-grey"
            }, [n("span", [t._v("Tidak")])])])])]) : t._e()], 1)])]), t._v(" "), ["M", "Q", "H"].indexOf(t.learning_material.type) > -1 ? n("b-modal", {
                attrs: {
                    active: t.show_media_library_modal,
                    "has-modal-card": "",
                    "trap-focus": "",
                    "aria-role": "dialog",
                    "aria-modal": ""
                },
                on: {
                    "update:active": function(e) {
                        t.show_media_library_modal = e
                    }
                }
            }, [n("form", {
                attrs: {
                    action: ""
                }
            }, [n("div", {
                staticClass: "modal-card",
                staticStyle: {
                    width: "auto"
                }
            }, [n("header", {
                staticClass: "modal-card-head has-background-primary"
            }, [n("p", {
                staticClass: "modal-card-title has-text-white"
            }, [t._v("Media Library")])]), t._v(" "), n("section", {
                staticClass: "modal-card-body"
            }, [n("media-library", {
                attrs: {
                    selected_ids: t.learning_material.mediaIds,
                    mediaCatcher: t.mediaCatcher,
                    multiple: t.multiple_media,
                    types: t.types,
                    max: 5,
                    onClickCancel: function() {
                        return t.show_media_library_modal = !1
                    }
                }
            })], 1)])])]) : t._e(), t._v(" "), "V" == t.learning_material.type ? n("div", [n("div", {
                staticClass: "card is-boxed",
                class: {
                    "is-disabled": t.edit
                },
                staticStyle: {
                    "margin-bottom": "15px"
                }
            }, [n("header", {
                staticClass: "card-header"
            }, [n("p", {
                staticClass: "card-header-title"
            }, [t.isEmpty(t.learning_material.meet) || t.isEmpty(t.learning_material.meet.playVideoRecordingUrl) ? n("span", [t._v("Video Conference")]) : n("span", [t._v("Video Recording URL")])])]), t._v(" "), n("div", {
                staticClass: "card-content"
            }, ["A" == t.learning_material.status ? n("div", [t.loading_save_title ? n("div", [n("spinner-loading")], 1) : n("div", [t.isEmpty(t.learning_material.conferenceType) || "GMEET" == t.learning_material.conferenceType ? n("div", [n("a", {
                staticClass: "button is-fullwidth is-large is-bg-primary has-text-white",
                class: {
                    "is-loading": t.loading_start_meeting
                },
                staticStyle: {
                    margin: "0",
                    "border-radius": "8px",
                    padding: "10px",
                    border: "none"
                },
                attrs: {
                    target: "_blank",
                    rel: "noopener",
                    disabled: t.loading_start_meeting
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.startMeeting.apply(null, arguments)
                    }
                }
            }, [t._m(23), t._v(" "), n("span", [n("small", [t._v(t._s(!t.isEmpty(t.auth) && t.learning_material.userId === t.auth.id && t.isEmpty(t.learning_material.gmeetUrl) ? "Mulai Conference" : "Gabung Conference"))])])]), t._v(" "), t._m(24)]) : t.isEmpty(t.learning_material.zoomStatus) || "waiting" == t.learning_material.zoomStatus ? n("a", {
                staticClass: "button is-fullwidth is-large is-info has-text-white",
                class: {
                    "is-loading": t.loading_start_meeting
                },
                attrs: {
                    target: "_blank",
                    rel: "noopener",
                    disabled: t.loading_start_meeting
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.startMeeting.apply(null, arguments)
                    }
                }
            }, [t._m(25), t._v(" "), t._m(26)]) : "started" == t.learning_material.zoomStatus ? n("a", {
                staticClass: "button is-fullwidth is-large is-bg-info has-text-white",
                class: {
                    "is-loading": t.loading_start_meeting
                },
                attrs: {
                    disabled: t.loading_start_meeting
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.startMeeting.apply(null, arguments)
                    }
                }
            }, [t._m(27), t._v(" "), t._m(28)]) : "ended" == t.learning_material.zoomStatus ? n("div", [t.isEmpty(t.learning_material.meet) || t.isEmpty(t.learning_material.meet.playVideoRecordingUrl) ? n("div", {
                staticClass: "box has-background-primary has-text-centered",
                staticStyle: {
                    padding: "10px"
                }
            }, [t._m(29)]) : n("div", [t._m(30), t._v(" "), n("div", {
                staticClass: "middle-content"
            }, [n("div", {
                staticClass: "tugas__content-timeline"
            }, [n("div", {
                staticClass: "content is-block",
                staticStyle: {
                    padding: "0",
                    border: "none",
                    margin: "0"
                }
            }, [t.isAdmin && !t.isEmpty(t.account) && t.account.university.id == t.group.universityId || !t.isEmpty(t.auth) && ["O", "A", "M"].indexOf(t.group.memberRole) > -1 && !t.isEmpty(t.learning_material.meet.playVideoRecordingUrl) ? n("div", {
                staticClass: "file-download",
                staticStyle: {
                    padding: "5px 0",
                    width: "100%"
                }
            }, [n("span", [n("b-icon", {
                staticClass: "has-text-info",
                staticStyle: {
                    "margin-left": "10px"
                },
                attrs: {
                    icon: "video"
                }
            }), t._v(" "), n("a", {
                attrs: {
                    target: "_blank",
                    rel: "noopener",
                    href: t.learning_material.meet.playVideoRecordingUrl
                }
            }, [t._v("Recording URL")])], 1), t._v(" "), n("a", {
                staticClass: "button is-text",
                attrs: {
                    target: "_blank",
                    rel: "noopener",
                    href: t.learning_material.meet.playVideoRecordingUrl
                }
            }, [t._v("Lihat")])]) : t._e(), t._v(" "), n("p", {
                staticClass: "help",
                staticStyle: {
                    "margin-top": "7px"
                }
            }, [n("strong", [t._v("Catatan:")]), t._v(" Rekaman video conference akan dihapus secara otomatis pada tanggal " + t._s(t.autoDeleteRecordingDate))])])])])])]) : t._e()])]) : n("div", {
                staticClass: "content"
            }, [t._m(31)])])]), t._v(" "), n("div", {
                staticClass: "card is-boxed",
                class: {
                    "is-disabled": t.edit
                },
                staticStyle: {
                    "margin-bottom": "15px"
                }
            }, [t._m(32), t._v(" "), n("div", {
                staticClass: "card-content"
            }, [!0 !== t.canOnlinePresence ? n("div", {
                staticClass: "notification is-warning",
                staticStyle: {
                    background: "#fbe88dd9",
                    border: "2px dashed #ecc402",
                    "border-radius": "7px",
                    padding: "15px"
                }
            }, [t._m(33)]) : t._e(), t._v(" "), n("conference-attendances", {
                attrs: {
                    group_id: t.group.id,
                    post_id: t.learning_material.id
                }
            })], 1)])]) : t._e(), t._v(" "), "Z" == t.learning_material.type ? n("div", [n("div", {
                staticClass: "columns",
                staticStyle: {
                    "margin-bottom": "0"
                }
            }, [n("div", {
                staticClass: "column"
            }, [n("a", {
                staticClass: "button is-large is-fullwidth is-info",
                class: {
                    "is-loading": t.loading_redirect_quiz
                },
                attrs: {
                    href: ""
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.setupQuiz.apply(null, arguments)
                    }
                }
            }, [t._v("\n            Atur Pertanyaan & Jawaban Quiz   "), n("swing-arrow")], 1)])]), t._v(" "), t.learning_material.quiz.isMemberExists && t.learning_material.quiz.questionsCount > 0 ? n("quiz-report-simple", {
                staticStyle: {
                    "margin-bottom": "15px"
                },
                attrs: {
                    post: t.learning_material,
                    questions: t.quiz_questions
                }
            }) : t._e()], 1) : t._e(), t._v(" "), "Q" == t.learning_material.type ? n("div", {
                staticClass: "card is-boxed",
                class: {
                    "is-disabled": t.edit
                },
                staticStyle: {
                    "margin-bottom": "15px"
                }
            }, [n("header", {
                staticClass: "card-header",
                staticStyle: {
                    "box-shadow": "none !important"
                },
                style: t.is_show_search && "display: none;"
            }, [n("p", {
                staticClass: "card-header-title"
            }, [n("span", [t._v("Peserta yang mengumpulkan "), n("br"), t._v(" "), n("p", {
                staticClass: "font-13 font-w-400"
            }, [t._v(t._s(t.count_member) + " peserta")])])]), t._v(" "), parseInt(t.file_size) > 0 ? n("a", {
                staticClass: "card-header-icon",
                staticStyle: {
                    "align-items": "center"
                },
                on: {
                    click: function(e) {
                        e.preventDefault(),
                        t.is_show_search = !0
                    }
                }
            }, [n("span", {
                staticClass: "icon"
            }, [n("figure", {
                staticClass: "image",
                staticStyle: {
                    overflow: "hidden",
                    margin: "0 auto"
                }
            }, [n("img", {
                attrs: {
                    src: "/assets/img/icon/search-normal.svg"
                }
            })])]), t._v(" "), n("p", {
                staticClass: "font-13 has-text-primary font-w-500",
                staticStyle: {
                    "margin-left": "4px"
                }
            }, [t._v("Cari")])]) : t._e(), t._v(" "), parseInt(t.file_size) > 0 ? n("a", {
                staticClass: "card-header-icon"
            }, [n("b-tooltip", {
                staticStyle: {
                    "align-items": "center"
                },
                style: (parseInt(t.file_size) > t.file_limit_zip || parseInt(t.count_member) <= 0) && "opacity: 0.4;",
                attrs: {
                    label: parseInt(t.file_size) > t.file_limit_zip ? "Unduh semua dibatasi, karena ukuran file melebihi batas 1 GB." : parseInt(t.count_member) <= 0 ? "Belum ada yang mengumpulkan" : "Unduh lampiran tugas yang disertakan dengan (Format file: .zip)",
                    multilined: "",
                    type: "is-dark",
                    position: "is-bottom"
                }
            }, [n("span", {
                staticClass: "icon"
            }, [n("figure", {
                staticClass: "image",
                staticStyle: {
                    overflow: "hidden",
                    margin: "0 auto"
                }
            }, [n("img", {
                attrs: {
                    src: "/assets/img/icon/import.svg"
                }
            })])]), t._v(" "), n("a", {
                staticClass: "font-13 has-text-primary font-w-500",
                staticStyle: {
                    "margin-left": "4px"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.validateDownload.apply(null, arguments)
                    }
                }
            }, [t._v("Unduh semua(" + t._s(t.formatBytes(t.file_size)) + ")")])])], 1) : t._e(), t._v(" "), n("a", {
                staticClass: "card-header-icon",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.exportExcel.apply(null, arguments)
                    }
                }
            }, [n("b-tooltip", {
                attrs: {
                    label: "Export Data ke Excel",
                    type: "is-dark"
                }
            }, [n("span", {
                staticClass: "icon"
            }, [n("figure", {
                staticClass: "image",
                staticStyle: {
                    overflow: "hidden",
                    margin: "0 auto"
                }
            }, [n("img", {
                attrs: {
                    src: "/assets/img/icon/new-xlsx.svg"
                }
            })])])])], 1)]), t._v(" "), n("header", {
                staticClass: "card-header",
                style: !t.is_show_search && "display: none;"
            }, [n("div", {
                staticClass: "card-header-title",
                staticStyle: {
                    "align-items": "center"
                }
            }, [n("b-field", {
                staticStyle: {
                    width: "100% !important"
                }
            }, [n("b-input", {
                attrs: {
                    placeholder: "Cari peserta yang mengumpulkan tugas",
                    type: "text",
                    icon: "magnify",
                    "icon-right": "close-circle",
                    "icon-right-clickable": ""
                },
                on: {
                    "icon-right-click": function(e) {
                        return e.preventDefault(),
                        function() {
                            t.is_show_search = !1,
                            t.answer_search_keyword = null
                        }
                        .apply(null, arguments)
                    }
                },
                model: {
                    value: t.answer_search_keyword,
                    callback: function(e) {
                        t.answer_search_keyword = e
                    },
                    expression: "answer_search_keyword"
                }
            })], 1)], 1)]), t._v(" "), n("div", {
                staticClass: "card-content",
                style: !t.is_show_search && parseInt(t.file_size) > 0 ? "padding: 0 10px;" : ""
            }, [!t.is_show_search && parseInt(t.file_size) > 0 ? n("div", {
                staticClass: "columns is-vcentered is-gapless"
            }, [t._m(34), t._v(" "), n("div", {
                staticClass: "column"
            }, [n("b-dropdown", {
                staticStyle: {
                    "margin-left": "10px"
                },
                attrs: {
                    "aria-role": "list"
                },
                scopedSlots: t._u([{
                    key: "trigger",
                    fn: function(t) {
                        var e = t.active;
                        return [n("b-button", {
                            staticClass: "font-13",
                            staticStyle: {
                                "border-radius": "8px"
                            },
                            attrs: {
                                label: "Urutkan",
                                "icon-right": e ? "menu-up" : "menu-down"
                            }
                        })]
                    }
                }], null, !1, 3286230969),
                model: {
                    value: t.answer_sort_by,
                    callback: function(e) {
                        t.answer_sort_by = e
                    },
                    expression: "answer_sort_by"
                }
            }, [t._v(" "), "ACADEMIC" === t.group.type ? n("b-dropdown-item", {
                staticClass: "font-14",
                attrs: {
                    "aria-role": "listitem",
                    value: "NIM"
                }
            }, [t._v("NIM")]) : t._e(), t._v(" "), n("b-dropdown-item", {
                staticClass: "font-14",
                attrs: {
                    "aria-role": "listitem",
                    value: "NAME"
                }
            }, [t._v("Nama")]), t._v(" "), n("b-dropdown-item", {
                staticClass: "font-14",
                attrs: {
                    "aria-role": "listitem",
                    value: "TIME"
                }
            }, [t._v("Waktu pengumpulan")])], 1)], 1)]) : t._e(), t._v(" "), n("teacher-question-answerer-lists", {
                attrs: {
                    id: t.learning_material.teacherQuestion.id,
                    group: t.group,
                    setCountMember: t.setCountMember,
                    answer_sort_by: t.answer_sort_by,
                    answer_search_keyword: t.answer_search_keyword
                }
            })], 1)]) : t._e(), t._v(" "), "H" == t.learning_material.type ? n("div", {
                staticStyle: {
                    "margin-bottom": "15px"
                }
            }, [n("div", {
                staticClass: "card is-boxed"
            }, [t._m(35), t._v(" "), n("div", {
                staticClass: "card-content"
            }, [n("div", {
                staticClass: "content"
            }, [t.isEmpty(t.learning_material.medias) ? n("div", {
                staticClass: "video-add-wrapper",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.showMediaLibraryModal(["video", "youtube"])
                    }
                }
            }, [n("img", {
                staticStyle: {
                    "margin-bottom": "20px"
                },
                attrs: {
                    src: "/assets/img/icon/video-add.svg",
                    alt: "Video Add"
                }
            }), t._v(" "), n("p", {
                staticClass: "has-text-primary font-poppins font-12 font-w-500"
            }, [t._v("Pilih video dari media library")])]) : n("div", [t.isEmpty(t.videos) ? t._e() : n("div", [n("interactive-playground", {
                attrs: {
                    video: t.videos[0],
                    isAutoPlay: !1,
                    setPlayer: t.setInteractivePlayer,
                    questions: t.interactive_questions,
                    isAdminOrOwner: !0
                }
            })], 1), t._v(" "), "H" === t.learning_material_type && t.error_load_video_interactive_post ? n("p", {
                staticClass: "has-text-danger font-14 font-w-500 font-poppins",
                staticStyle: {
                    "margin-top": "10px"
                }
            }, [t._v("Tidak dapat menambahkan video, Ukuran maksimal video yang bisa ditambahkan 100MB")]) : t._e(), t._v(" "), n("div", {
                staticClass: "flex-row flex-row-centered flex-row-between",
                staticStyle: {
                    "margin-top": "20px"
                }
            }, [n("div", [t.isEmpty(t.interactive_questions) && t.edit ? n("a", {
                staticClass: "has-text-primary font-poppins font-w-600 font-16",
                class: {
                    "is-disabled": t.loading_redirect_interactive
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.changeMedias.apply(null, arguments)
                    }
                }
            }, [t._v("Ubah video")]) : n("p", {
                staticClass: "font-w-500 font-16 has-text-black",
                staticStyle: {
                    "padding-bottom": "16px"
                }
            }, [t._v(t._s(t.interactive_questions.length) + " Pertanyaan")])]), t._v(" "), t.edit ? n("button", {
                staticClass: "button font-w-700 font-16",
                class: [{
                    "is-disabled": t.loading_redirect_interactive || t.count_member > 0 || t.error_load_video_interactive_post
                }, {
                    "is-loading": t.loading_save_title
                }, t.isEmpty(t.interactive_questions) ? "is-primary" : "is-text has-text-primary"],
                staticStyle: {
                    padding: "16px 32px",
                    height: "auto"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.setupInteractiveVideo.apply(null, arguments)
                    }
                }
            }, [t._v("\n                  " + t._s(t.isEmpty(t.interactive_questions) ? "Tambahkan Pertanyaan" : "Atur Pertanyaan") + " "), n("i", {
                staticClass: "fa fa-arrow-right",
                staticStyle: {
                    "margin-left": "15px"
                }
            })]) : t._e()]), t._v(" "), t.isEmpty(t.interactive_questions) ? t._e() : n("div", {
                staticStyle: {
                    "margin-top": "18px"
                }
            }, t._l(t.interactive_questions, (function(e, r) {
                return n("div", {
                    key: r,
                    staticClass: "flex-row flex-row-between",
                    staticStyle: {
                        padding: "12px",
                        cursor: "pointer"
                    },
                    on: {
                        click: function(n) {
                            return n.preventDefault(),
                            t.showInteractiveQuestion(e)
                        }
                    }
                }, [n("div", {
                    staticClass: "font-poppins font-16 font-w-400 flex-row flex-row-centered",
                    staticStyle: {
                        color: "#363636",
                        width: "85%"
                    }
                }, [n("span", {
                    staticStyle: {
                        margin: "0px",
                        "margin-right": "12px"
                    }
                }, [t._v(t._s(r + 1) + ".")]), t._v(" "), t.isEmpty(e.mediaId) ? t._e() : n("img", {
                    staticStyle: {
                        width: "20px",
                        height: "20px",
                        "margin-right": "5px"
                    },
                    attrs: {
                        src: "/assets/img/icon/gallery-black.svg"
                    }
                }), t._v(" "), n("p", {
                    staticStyle: {
                        margin: "0px",
                        width: "90%",
                        "white-space": "nowrap",
                        overflow: "hidden",
                        "text-overflow": "ellipsis"
                    }
                }, [t._v(t._s(t.isEmpty(e.body) || "" == e.body ? t.isEmpty(e.mediaId) ? "" : "Gambar" : e.body))])]), t._v(" "), n("p", {
                    staticClass: "font-poppins font-16 font-w-400",
                    staticStyle: {
                        color: "#363636"
                    }
                }, [t._v(t._s(e.showOnMinute))])])
            }
            )), 0)])])])])]) : t._e(), t._v(" "), "H" == t.learning_material.type ? n("div", {
                class: {
                    "is-disabled": t.edit
                },
                staticStyle: {
                    "margin-bottom": "15px"
                }
            }, [n("div", {
                staticClass: "card is-boxed"
            }, [n("header", {
                staticClass: "card-header",
                staticStyle: {
                    "box-shadow": "0 1px 2px rgb(10 10 10 / 10%)"
                },
                style: t.is_show_search_interactive && "display: none;"
            }, [n("p", {
                staticClass: "card-header-title"
            }, [n("span", [t._v("Nilai Peserta "), n("br"), t._v(" "), t.count_member > 0 ? n("p", {
                staticClass: "font-13 font-w-400"
            }, [t._v(t._s(t.count_member) + " peserta")]) : t._e()])]), t._v(" "), t.count_member > 0 ? n("a", {
                staticClass: "card-header-icon",
                staticStyle: {
                    "align-items": "center"
                },
                on: {
                    click: function(e) {
                        e.preventDefault(),
                        t.is_show_search_interactive = !0
                    }
                }
            }, [n("span", {
                staticClass: "icon"
            }, [n("figure", {
                staticClass: "image",
                staticStyle: {
                    overflow: "hidden",
                    margin: "0 auto"
                }
            }, [n("img", {
                attrs: {
                    src: "/assets/img/icon/search-normal.svg"
                }
            })])]), t._v(" "), n("p", {
                staticClass: "font-13 has-text-primary font-w-500",
                staticStyle: {
                    "margin-left": "4px"
                }
            }, [t._v("Cari")])]) : t._e(), t._v(" "), t.count_member > 0 ? n("a", {
                staticClass: "card-header-icon",
                staticStyle: {
                    "align-items": "center"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.toEvaluationPage.apply(null, arguments)
                    }
                }
            }, [n("span", {
                staticClass: "icon"
            }, [n("figure", {
                staticClass: "image",
                staticStyle: {
                    overflow: "hidden",
                    margin: "0 auto"
                }
            }, [n("img", {
                attrs: {
                    src: "/assets/img/icon/chart-outline.svg"
                }
            })])]), t._v(" "), n("p", {
                staticClass: "font-13 has-text-primary font-w-500",
                staticStyle: {
                    "margin-left": "4px"
                }
            }, [t._v("Lihat Evaluasi")])]) : t._e()]), t._v(" "), n("header", {
                staticClass: "card-header",
                style: !t.is_show_search_interactive && "display: none;"
            }, [n("div", {
                staticClass: "card-header-title",
                staticStyle: {
                    "align-items": "center"
                }
            }, [n("b-field", {
                staticStyle: {
                    width: "100% !important"
                }
            }, [n("b-input", {
                attrs: {
                    placeholder: "Cari peserta yang mengerjakan video interaktif",
                    type: "text",
                    icon: "magnify",
                    "icon-right": "close-circle",
                    "icon-right-clickable": ""
                },
                on: {
                    "icon-right-click": function(e) {
                        return e.preventDefault(),
                        function() {
                            t.is_show_search_interactive = !1,
                            t.answer_interactive_keyword = null
                        }
                        .apply(null, arguments)
                    }
                },
                model: {
                    value: t.answer_interactive_keyword,
                    callback: function(e) {
                        t.answer_interactive_keyword = e
                    },
                    expression: "answer_interactive_keyword"
                }
            })], 1)], 1)]), t._v(" "), n("div", {
                staticClass: "card-content",
                staticStyle: {
                    padding: "0 24px 24px 24px"
                }
            }, [n("interactive-post-answerer-lists", {
                attrs: {
                    id: t.learning_material.id,
                    group: t.group,
                    setCountMember: t.setCountMember,
                    answer_sort_by: t.answer_sort_by,
                    answer_search_keyword: t.answer_interactive_keyword
                }
            })], 1)])]) : t._e(), t._v(" "), n("div", {
                staticClass: "card is-boxed",
                staticStyle: {
                    "margin-bottom": "15px"
                }
            }, [t._m(36), t._v(" "), n("div", {
                staticClass: "card-content"
            }, [n("div", {
                staticClass: "content"
            }, [n("txteditor", {
                attrs: {
                    editText: t.edit,
                    onSave: t.setDesc,
                    onUpdate: t.setDesc,
                    text: t.learning_material.description
                }
            })], 1)])]), t._v(" "), n("div", {
                staticClass: "card is-boxed",
                class: {
                    "is-disabled": "D" == t.learning_material.status
                },
                staticStyle: {
                    "margin-bottom": "15px"
                }
            }, [t._m(37), t._v(" "), n("div", {
                staticClass: "card-content"
            }, [n("comment-box", {
                key: t.learning_material.id,
                attrs: {
                    group: t.group,
                    memberRole: t.group.memberRole,
                    post: t.learning_material,
                    loadSelf: !0,
                    disabledComment: t.isAdmin && "GUEST" == t.group.memberRole,
                    memberId: t.group.memberId
                },
                on: {
                    onReplied: function(data) {
                        return t.learning_material.commentCount = data.dataProvider.page.total
                    }
                }
            })], 1)])], 1), t._v(" "), n("b-modal", {
                attrs: {
                    active: t.is_show_confirm_zip,
                    width: 640,
                    scroll: "clip",
                    "has-modal-card": ""
                },
                on: {
                    "update:active": function(e) {
                        t.is_show_confirm_zip = e
                    }
                }
            }, [n("div", {
                staticClass: "modal-card",
                staticStyle: {
                    width: "500px"
                }
            }, [n("header", {
                staticClass: "modal-card-head has-text-centered has-background-white",
                staticStyle: {
                    border: "none"
                }
            }, [n("div", {
                staticClass: "modal-card-title"
            }, [n("p", {
                staticClass: "title font-20 font-w-600",
                staticStyle: {
                    "margin-bottom": "10px"
                }
            }, [t._v("Lanjutkan untuk mengunduh?")]), t._v(" "), n("p", {
                staticClass: "font-14",
                staticStyle: {
                    color: "#292929",
                    "line-height": "24px"
                }
            }, [t._v("Anda akan mengunduh semua lampiran tugas yang "), n("br"), t._v(" disertakan oleh peserta kelas.(Format file: .zip)")])])]), t._v(" "), n("footer", {
                staticClass: "modal-card-foot has-background-white",
                staticStyle: {
                    border: "none"
                }
            }, [n("a", {
                staticClass: "button is-fullwidth font-w-600 font-16 has-text-primary",
                staticStyle: {
                    padding: "16px 32px",
                    height: "auto",
                    "margin-right": "20px",
                    "border-width": "0px"
                },
                on: {
                    click: function(e) {
                        e.preventDefault(),
                        t.is_show_confirm_zip = !1
                    }
                }
            }, [t._v("Batal")]), t._v(" "), n("button", {
                staticClass: "button is-primary has-text-white is-fullwidth font-w-700 font-16",
                staticStyle: {
                    padding: "16px 32px",
                    height: "auto"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.downloadAsZip(t.learning_material.id)
                    }
                }
            }, [t._v("Ya, lanjutkan")])])])]), t._v(" "), n("b-modal", {
                attrs: {
                    active: t.is_warning_zip,
                    width: 500,
                    scroll: "clip",
                    "has-modal-card": ""
                },
                on: {
                    "update:active": function(e) {
                        t.is_warning_zip = e
                    }
                }
            }, [n("div", {
                staticClass: "modal-card",
                staticStyle: {
                    width: "auto",
                    display: "inline-flex",
                    padding: "50px !important"
                }
            }, [n("header", {
                staticClass: "modal-card-head has-text-centered has-background-white",
                staticStyle: {
                    border: "none",
                    display: "inline-table"
                }
            }, [n("div", {
                staticClass: "modal-card-title"
            }, [n("img", {
                staticStyle: {
                    height: "64px",
                    width: "64px"
                },
                attrs: {
                    src: "/assets/img/icon/info-dark-blue.svg"
                }
            }), t._v(" "), n("p", {
                staticClass: "title font-20 font-w-600",
                staticStyle: {
                    "margin-bottom": "10px"
                }
            }, [t._v("Unduh Semua dibatasi.")]), t._v(" "), n("p", {
                staticClass: "font-14",
                staticStyle: {
                    color: "#292929",
                    "line-height": "24px"
                }
            }, [t._v("Ukuran file yang dilampirkan oleh "), n("br"), t._v(" mahasiswa melebihi batas 1 GB."), n("br"), t._v(" (Ukuran file: " + t._s(t.formatBytes(t.file_size)) + ")")])])]), t._v(" "), n("footer", {
                staticClass: "modal-card-foot has-background-white",
                staticStyle: {
                    border: "none"
                }
            }, [n("button", {
                staticClass: "button is-bordered has-text-primary2 is-fullwidth font-w-700 font-16",
                staticStyle: {
                    padding: "16px 32px",
                    height: "auto"
                },
                on: {
                    click: function(e) {
                        t.is_warning_zip = !1
                    }
                }
            }, [t._v("Oke, saya paham.")])])])]), t._v(" "), n("b-modal", {
                attrs: {
                    active: t.is_yet_submited_zip,
                    width: 500,
                    scroll: "clip",
                    "has-modal-card": ""
                },
                on: {
                    "update:active": function(e) {
                        t.is_yet_submited_zip = e
                    }
                }
            }, [n("div", {
                staticClass: "modal-card",
                staticStyle: {
                    width: "auto",
                    display: "inline-flex",
                    padding: "50px !important"
                }
            }, [n("header", {
                staticClass: "modal-card-head has-text-centered has-background-white",
                staticStyle: {
                    border: "none",
                    display: "inline-table"
                }
            }, [n("div", {
                staticClass: "modal-card-title"
            }, [n("img", {
                staticStyle: {
                    height: "64px",
                    width: "64px"
                },
                attrs: {
                    src: "/assets/img/icon/info-dark-blue.svg"
                }
            }), t._v(" "), n("p", {
                staticClass: "title font-20 font-w-600",
                staticStyle: {
                    "margin-bottom": "10px"
                }
            }, [t._v("Tidak dapat mengunduh lampiran")]), t._v(" "), n("p", {
                staticClass: "font-14",
                staticStyle: {
                    color: "#292929",
                    "line-height": "24px"
                }
            }, [t._v("Belum ada mahasiswa yang mengumpulkan")])])]), t._v(" "), n("footer", {
                staticClass: "modal-card-foot has-background-white",
                staticStyle: {
                    border: "none"
                }
            }, [n("button", {
                staticClass: "button is-bordered has-text-primary2 is-fullwidth font-w-700 font-16",
                staticStyle: {
                    padding: "16px 32px",
                    height: "auto"
                },
                on: {
                    click: function(e) {
                        t.is_yet_submited_zip = !1
                    }
                }
            }, [t._v("Oke, saya paham.")])])])])], 1)
        }
        ), [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("label", {
                staticClass: "label"
            }, [n("span", [t._v("Waktu sesi pertemuan")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("label", {
                staticClass: "label"
            }, [n("span", [t._v("Pilih Media Conference")])])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("span", {
                staticClass: "icon"
            }, [e("img", {
                attrs: {
                    src: "/assets/img/icon/info-circle-darkblue.svg"
                }
            })])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("label", {
                staticClass: "label"
            }, [n("span", [t._v("Pilih Tanggal & Waktu")])])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("span", {
                staticClass: "icon"
            }, [e("i", {
                staticClass: "fa fa-check"
            })])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("span", {
                staticClass: "icon"
            }, [e("i", {
                staticClass: "fa fa-exclamation-triangle"
            })])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("label", {
                staticClass: "label"
            }, [n("span", [t._v("Tambahkan Batas Waktu Penyerahan?")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("label", {
                staticClass: "label"
            }, [n("span", [t._v("Pilih Batas Tanggal & Waktu")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("label", {
                staticClass: "label"
            }, [n("span", [t._v("Gambar")])])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("span", {
                staticClass: "icon"
            }, [e("i", {
                staticClass: "fas fa-trash"
            })])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("span", {
                staticClass: "icon"
            }, [e("i", {
                staticClass: "fa fa-trash"
            })])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("label", {
                staticClass: "label"
            }, [n("span", [t._v("Dokumen")])])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("span", {
                staticClass: "icon"
            }, [e("i", {
                staticClass: "fas fa-times-circle"
            })])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("label", {
                staticClass: "label"
            }, [n("span", [t._v("Durasi Pengerjaan")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("label", {
                staticClass: "label"
            }, [n("span", [t._v("Quiz dapat diulang?")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("label", {
                staticClass: "label"
            }, [n("span", [t._v("Maksimal quiz diulang")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("label", {
                staticClass: "label"
            }, [n("span", [t._v("Jeda quiz diulang")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "control"
            }, [n("span", {
                staticClass: "button is-static"
            }, [t._v("Menit")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("label", {
                staticClass: "label"
            }, [n("span", [t._v("Batas Waktu")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("label", {
                staticClass: "label"
            }, [n("span", [t._v("Pilih Batas Waktu")])])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("span", {
                staticClass: "icon"
            }, [e("i", {
                staticClass: "fa fa-check"
            })])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("span", {
                staticClass: "icon"
            }, [e("i", {
                staticClass: "fa fa-exclamation-triangle"
            })])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("label", {
                staticClass: "label",
                staticStyle: {
                    "margin-bottom": "0"
                }
            }, [t._v("Acak Pertanyaan  "), n("span", {
                staticClass: "tag is-info"
            }, [t._v("Baru")])])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("span", {
                staticClass: "icon"
            }, [e("img", {
                attrs: {
                    src: "/assets/img/icon/video-circle.svg"
                }
            })])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("p", {
                staticClass: "font-13 font-poppins has-text-grey3",
                staticStyle: {
                    "margin-top": "12px"
                }
            }, [n("i", {
                staticClass: "fas fa-info-circle"
            }), t._v(" Video Conference menggunakan Google Meet")])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("span", {
                staticClass: "icon"
            }, [e("i", {
                staticClass: "fas fa-chalkboard"
            })])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("span", [n("small", [t._v("Mulai Conference")])])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("span", {
                staticClass: "icon"
            }, [e("i", {
                staticClass: "fas fa-chalkboard"
            })])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("span", [n("small", [t._v("Gabung ke Conference")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("p", {
                staticClass: "has-text-white"
            }, [n("i", {
                staticClass: "fas fa-check"
            }), t._v(" Pertemuan telah SELESAI\n                  ")])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "message is-primary",
                staticStyle: {
                    margin: "0"
                }
            }, [n("div", {
                staticClass: "message-body",
                staticStyle: {
                    padding: "15px"
                }
            }, [t._v("\n                      Lihat ulang perkuliahan Anda melalui video url dibawah\n                      ini:\n                    ")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("blockquote", [n("p", {
                staticClass: "help has-text-grey"
            }, [n("strong", [t._v("ID dan Password")]), t._v(" Video Conference akan\n                "), n("strong", [t._v("muncul")]), t._v(" setelah status menjadi\n                "), n("span", {
                staticClass: "has-text-info"
            }, [t._v('"Dibagikan"')])])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("header", {
                staticClass: "card-header"
            }, [n("p", {
                staticClass: "card-header-title"
            }, [t._v("Kehadiran Conference")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "columns is-vcentered is-gapless"
            }, [n("div", {
                staticClass: "column",
                staticStyle: {
                    "margin-right": "10px"
                }
            }, [t._v("\n                Kami mengerti kebutuhan Anda untuk melakukan "), n("strong", [t._v("presensi")]), t._v(", namun mohon maaf sekarang "), n("strong", {
                staticClass: "has-text-danger"
            }, [t._v("kampus Anda belum memiliki akses untuk melakukan presensi")]), t._v(", silakan "), n("strong", [t._v("hubungi admin")]), t._v(" dan "), n("strong", {
                staticClass: "has-text-primary"
            }, [t._v("upgrade paket kampus Anda.")])]), t._v(" "), n("div", {
                staticClass: "column is-narrow"
            }, [n("a", {
                staticClass: "button is-primary",
                attrs: {
                    href: "/edlink-pro.php",
                    target: "_blank"
                }
            }, [t._v("Lihat Penawaran")])])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "column is-narrow"
            }, [n("p", {
                staticClass: "font-12",
                staticStyle: {
                    color: "#292929"
                }
            }, [t._v("Urutkan: ")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("header", {
                staticClass: "card-header"
            }, [n("p", {
                staticClass: "card-header-title"
            }, [t._v("Video Interaktif")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("header", {
                staticClass: "card-header"
            }, [n("p", {
                staticClass: "card-header-title"
            }, [t._v("Catatan")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("header", {
                staticClass: "card-header"
            }, [n("p", {
                staticClass: "card-header-title"
            }, [t._v("Komentar")])])
        }
        ], !1, null, null, null));
        e.a = L.exports
    },
    838: function(t, e, n) {
        "use strict";
        n(18),
        n(17),
        n(16),
        n(22),
        n(23);
        var r = n(12)
          , l = n(14);
        function o(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }
                ))),
                e.push.apply(e, n)
            }
            return e
        }
        function c(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? o(Object(source), !0).forEach((function(e) {
                    Object(r.a)(t, e, source[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : o(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }
                ))
            }
            return t
        }
        var d = {
            computed: c({}, Object(l.d)({
                sameDevice: function(t) {
                    return t.quizes.sameDevice
                }
            })),
            methods: c(c({}, Object(l.b)({
                saveDevice: "quizes/saveDevice"
            })), {}, {
                onCancel: function() {
                    this.$store.commit("quizes/setSameDevice", {
                        key: "showWarning",
                        value: !1
                    }),
                    this.$store.commit("quizes/setSameDevice", {
                        key: "quizMemberUuid",
                        value: null
                    })
                }
            })
        }
          , m = n(4)
          , component = Object(m.a)(d, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("b-modal", {
                attrs: {
                    active: t.sameDevice.showWarning,
                    "can-cancel": !1,
                    width: 446
                },
                on: {
                    "update:active": function(e) {
                        return t.$set(t.sameDevice, "showWarning", e)
                    }
                }
            }, [n("div", {
                staticClass: "box is-boxed-3 has-text-centered"
            }, [n("p", {
                staticClass: "font-20 font-w-600 has-text-darkblue"
            }, [t._v("Deteksi Multi-Login")]), t._v(" "), n("p", {
                staticClass: "font-16 font-w-400 has-text-darkblue",
                staticStyle: {
                    "margin-top": "12px",
                    "margin-bottom": "28px"
                }
            }, [t._v("Kerjakan kuis dari perangkat ini?"), n("br"), t._v("Pilih “Kerjakan di sini” untuk melanjutkan")]), t._v(" "), n("div", {
                staticClass: "columns is-dekstop is-mobile is-tablet is-vcentered"
            }, [n("div", {
                staticClass: "column is-6"
            }, [n("button", {
                staticClass: "button is-default is-fullwidth",
                staticStyle: {
                    background: "#E2E7FF",
                    border: "1px solid #E2E7FF",
                    "border-radius": "6px",
                    height: "51px"
                },
                attrs: {
                    disabled: t.sameDevice.saveDeviceLoading
                },
                on: {
                    click: t.onCancel
                }
            }, [n("span", {
                staticClass: "font-16 font-w-500 has-text-primary2"
            }, [t._v("Tidak")])])]), t._v(" "), n("div", {
                staticClass: "column is-6"
            }, [n("button", {
                staticClass: "button is-primary is-fullwidth",
                class: {
                    "is-loading": t.sameDevice.saveDeviceLoading
                },
                staticStyle: {
                    "border-radius": "6px",
                    height: "51px"
                },
                attrs: {
                    disabled: t.sameDevice.saveDeviceLoading
                },
                on: {
                    click: t.saveDevice
                }
            }, [n("span", {
                staticClass: "font-16 font-w-700"
            }, [t._v("Kerjakan di sini")])])])])])])
        }
        ), [], !1, null, null, null);
        e.a = component.exports
    },
    854: function(t, e, n) {
        "use strict";
        n(49),
        n(48),
        n(43);
        var r = n(103)
          , l = n(0)
          , o = {
            mixins: [r.a],
            props: {
                group_id: {
                    type: Number,
                    required: !0
                },
                post_id: {
                    type: Number,
                    required: !0
                }
            },
            computed: {
                custom_attendances: function() {
                    return collect(this.attendances).keyBy("actionableId").all()
                },
                canOnlinePresence: function() {
                    return !this.isEmpty(this.auth.activeAccount) && !0 === this.auth.activeAccount.permissionNames.includes("can_online_presence")
                }
            },
            mounted: function() {
                this.loading_get_members = !0,
                this.getMembers(this.group_id, !0),
                this.getAttendances()
            },
            data: function() {
                return {
                    members: [],
                    attendances: [],
                    loading_attend_id: null,
                    loading_get_members: !1,
                    memberDataProvider: {
                        page: {
                            current: 1,
                            limit: 10
                        }
                    }
                }
            },
            methods: {
                getAttendances: function() {
                    var t = this;
                    this.$axios.post(l.e.GET_ALL_ATTENDANCES(this.post_id)).then((function(e) {
                        var data = e.data;
                        0 == data.applicationSystem.code && (t.isEmpty(data.data) || (t.attendances = data.data))
                    }
                    )).catch((function() {}
                    ))
                },
                onGetMembersSuccess: function(t, e) {
                    var n = t.data.data;
                    e || (n = collect(this.members).merge(n).toArray()),
                    this.members = n,
                    this.memberDataProvider = t.data.dataProvider,
                    this.loading_get_members = !1
                },
                onLoadMore: function(t) {
                    this.loading_get_members = !0,
                    this.getMembers(this.group_id)
                },
                attendance: function(t, e) {
                    var n = this;
                    this.loading_attend_id = t.id,
                    this.$axios.post(l.e.ATTENDANCE(this.post_id), {
                        member_id: t.id,
                        attend: e
                    }).then((function(t) {
                        var data = t.data;
                        0 == data.applicationSystem.code ? n.attendances = data.data : toast.danger(data.applicationSystem.message),
                        n.loading_attend_id = null
                    }
                    )).catch((function() {
                        n.loading_attend_id = null
                    }
                    ))
                }
            }
        }
          , c = n(4)
          , component = Object(c.a)(o, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("div", [t.isEmpty(t.members) ? n("div", {
                staticClass: "columns is-vcentered is-mobile"
            }, [t._m(0)]) : n("div", [n("b-message", {
                attrs: {
                    type: "is-info"
                }
            }, [t._v("Pencatatan kehadiran dibawah hanya untuk untuk laporan video conference.")]), t._v(" "), t._l(t.members, (function(e, r) {
                return n("div", {
                    key: r,
                    staticClass: "columns is-vcentered is-mobile",
                    staticStyle: {
                        padding: "0 10px",
                        "margin-bottom": "0"
                    }
                }, [n("div", {
                    staticClass: "column is-narrow"
                }, [t._v("#" + t._s(r + 1))]), t._v(" "), n("div", {
                    staticClass: "column truncated-text"
                }, [n("span", [t._v(t._s(e.name) + " "), t.isEmpty(e.parentNumber) ? t._e() : n("span", {
                    staticClass: "has-text-grey"
                }, [n("small", [t._v("(" + t._s(e.parentNumber) + ")")])])])]), t._v(" "), n("div", {
                    staticClass: "column is-narrow"
                }, [n("div", {
                    staticClass: "columns is-vcentered is-gapless"
                }, [n("div", {
                    staticClass: "column",
                    staticStyle: {
                        "margin-right": "5px"
                    }
                }, [n("button", {
                    staticClass: "button is-small",
                    class: {
                        "is-primary": !t.isEmpty(t.custom_attendances[e.id]),
                        "is-loading": t.loading_attend_id == e.id,
                        "is-disabled": t.loading_attend_id == e.id || !0 !== t.canOnlinePresence
                    },
                    on: {
                        click: function(n) {
                            return n.preventDefault(),
                            t.attendance(e, 1)
                        }
                    }
                }, [t._v("Hadir")])]), t._v(" "), n("div", {
                    staticClass: "column"
                }, [n("button", {
                    staticClass: "button is-small",
                    class: {
                        "is-dark": t.isEmpty(t.custom_attendances[e.id]),
                        "is-loading": t.loading_attend_id == e.id,
                        "is-disabled": t.loading_attend_id == e.id || !0 !== t.canOnlinePresence
                    },
                    on: {
                        click: function(n) {
                            return n.preventDefault(),
                            t.attendance(e, 0)
                        }
                    }
                }, [t._v("Tidak Hadir")])])])])])
            }
            )), t._v(" "), t.loading_get_members ? t._e() : n("pagination", {
                attrs: {
                    dataProvider: t.memberDataProvider,
                    clickHandler: t.onLoadMore
                }
            }), t._v(" "), t.loading_get_members ? n("div", [n("spinner-loading")], 1) : t._e()], 2)])])
        }
        ), [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "column"
            }, [n("p", {
                staticClass: "has-text-grey has-text-centered"
            }, [n("small", [t._v("Data tidak ditemukan.")])])])
        }
        ], !1, null, null, null);
        e.a = component.exports
    },
    855: function(t, e, n) {
        "use strict";
        var r = {
            props: {
                quiz: {
                    type: Object,
                    required: !0
                },
                show_evaluation: {
                    type: Boolean,
                    default: !1
                },
                show_back_group: {
                    type: Boolean,
                    default: !1
                },
                result: {
                    type: Object,
                    required: !0
                },
                member_role: {
                    type: String,
                    default: null
                }
            },
            computed: {
                time_to_run_quiz: function() {
                    var t = moment(this.quiz.startedAt);
                    return moment(this.quiz.finishedAt).diff(t, "minutes")
                }
            },
            data: function() {
                return {
                    tab: 0
                }
            }
        }
          , l = n(4)
          , component = Object(l.a)(r, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [t.show_evaluation ? n("div", {
                staticClass: "tabs"
            }, [n("ul", [n("li", {
                class: 0 == t.tab ? "is-active" : ""
            }, [n("a", {
                on: {
                    click: function(e) {
                        e.preventDefault(),
                        t.tab = 0
                    }
                }
            }, [t._v("Hasil Tes")])]), t._v(" "), "O" == t.member_role || "A" == t.member_role ? n("li", {
                class: 1 == t.tab ? "is-active" : ""
            }, [n("a", {
                on: {
                    click: function(e) {
                        e.preventDefault(),
                        t.tab = 1
                    }
                }
            }, [t._v("Evaluasi")])]) : t._e()])]) : t._e(), t._v(" "), 0 != t.tab || t.isEmpty(t.result) ? t._e() : n("div", {
                staticClass: "columns"
            }, [n("div", {
                staticClass: "column is-4"
            }, [n("div", {
                staticClass: "box has-text-centered is-relative",
                staticStyle: {
                    "border-radius": "12px",
                    padding: "10px",
                    background: "#52AF50"
                }
            }, [n("div", {
                staticStyle: {
                    position: "absolute",
                    top: "6px",
                    left: "6px"
                }
            }, [n("svg", {
                attrs: {
                    width: "40",
                    height: "40",
                    viewBox: "0 0 40 40",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [n("g", {
                staticStyle: {
                    "mix-blend-mode": "screen"
                },
                attrs: {
                    opacity: "0.25"
                }
            }, [n("path", {
                attrs: {
                    d: "M31.03 22.475C35.99 22.37 40 18.32 40 13.33C40 9.145 37.17 5.65 33.335 4.555V2.5C33.335 1.12 32.215 0 30.835 0H9.165C7.785 0 6.665 1.12 6.665 2.5V4.555C2.83 5.65 0 9.145 0 13.33C0 18.32 4.01 22.37 8.975 22.475C10.77 25.11 13.5 27.03 16.67 27.855V33.33H13.335C11.49 33.33 10 34.825 10 36.665C10 38.505 11.495 40 13.335 40H26.67C28.51 40 30.005 38.505 30.005 36.665C30.005 34.825 28.51 33.33 26.665 33.33H23.33V27.855C26.5 27.035 29.235 25.115 31.03 22.475ZM35 13.33C35 14.745 34.245 15.935 33.16 16.69C33.23 16.13 33.33 15.575 33.33 14.995V10.085C34.32 10.845 35 11.99 35 13.33ZM5 13.33C5 11.99 5.68 10.845 6.665 10.085V14.995C6.665 15.575 6.765 16.13 6.835 16.69C5.755 15.94 5 14.745 5 13.33Z",
                    fill: "white"
                }
            })])])]), t._v(" "), n("p", {
                staticClass: "font-w-400 font-14 has-text-white"
            }, [t._v("Nilai Quiz")]), t._v(" "), n("p", {
                staticClass: "font-w-700 has-text-white",
                staticStyle: {
                    "font-size": "40px"
                }
            }, [t._v(t._s(t.result.totalScore))])])]), t._v(" "), n("div", {
                staticClass: "column"
            }, [n("div", {
                staticClass: "columns"
            }, [n("div", {
                staticClass: "column"
            }, [n("div", {
                staticClass: "field"
            }, [n("label", {
                staticClass: "has-text-grey",
                attrs: {
                    for: ""
                }
            }, [t._v("Jumlah Pertanyaan")]), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("p", [n("strong", [t._v(t._s(t.quiz.questionsCount))])])])])]), t._v(" "), n("div", {
                staticClass: "column"
            }, [n("div", {
                staticClass: "field"
            }, [n("label", {
                staticClass: "has-text-grey",
                attrs: {
                    for: ""
                }
            }, [t._v("Waktu Mulai")]), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("p", [n("strong", [t._v(t._s(t.dateFormat(t.moment.unix(t.result.startedAt), "DD MMM YYYY, HH:mm")))])])])])])]), t._v(" "), n("div", {
                staticClass: "columns is-mobile"
            }, [n("div", {
                staticClass: "column"
            }, [n("div", {
                staticClass: "field"
            }, [n("label", {
                staticClass: "has-text-grey",
                attrs: {
                    for: ""
                }
            }, [t._v("Benar / Salah")]), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("p", [n("strong", [n("span", {
                staticClass: "has-text-success"
            }, [t._v(t._s(t.result.totalCorrect))]), t._v(" / "), n("span", {
                staticClass: "has-text-danger"
            }, [t._v(t._s(t.result.totalWrong))])])])])])]), t._v(" "), n("div", {
                staticClass: "column"
            }, [n("div", {
                staticClass: "field"
            }, [n("label", {
                staticClass: "has-text-grey",
                attrs: {
                    for: ""
                }
            }, [t._v("Waktu Selesai")]), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("p", [n("strong", [t._v(t._s(t.dateFormat(t.moment.unix(t.result.submittedAt), "DD MMM YYYY, HH:mm")))])])])])])]), t._v(" "), t.isEmpty(t.quiz.startedAt) ? t._e() : n("div", {
                staticClass: "columns"
            }, [n("div", {
                staticClass: "column"
            }, [n("div", {
                staticClass: "field"
            }, [n("label", {
                staticClass: "has-text-grey",
                attrs: {
                    for: ""
                }
            }, [t._v("Tanggal Tes")]), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("p", [n("strong", [t._v(t._s(t.getDate(t.quiz.startedAt)))])])])])]), t._v(" "), n("div", {
                staticClass: "column"
            }, [n("div", {
                staticClass: "field"
            }, [n("label", {
                staticClass: "has-text-grey",
                attrs: {
                    for: ""
                }
            }, [t._v("Waktu Tes")]), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("p", [n("strong", [t._v(t._s(t.getTimeOfDate(t.quiz.startedAt)) + " - " + t._s(t.getTimeOfDate(t.quiz.finishedAt)))])]), t._v(" "), n("p", {
                staticClass: "has-text-grey"
            }, [n("small", {
                staticClass: "has-text-info"
            }, [t._v(t._s(t.time_to_run_quiz) + " Menit")])])])])])]), t._v(" "), !t.isEmpty(t.quiz.isRetakeable) && t.quiz.isRetakeable && !t.isEmpty(t.quiz.gradeLimit) && !t.isEmpty(t.result) && t.quiz.gradeLimit > t.result.totalScore ? n("div", {
                staticClass: "columns"
            }, [n("div", {
                staticClass: "column"
            }, [n("div", {
                staticClass: "field"
            }, [n("label", {
                staticClass: "has-text-grey",
                attrs: {
                    for: ""
                }
            }, [t._v("Sisa kesempatan mengulang")]), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("p", [n("strong", {
                class: {
                    "has-text-danger": t.quiz.maxRetake - t.result.quizTakedCount <= 0
                }
            }, [t._v(t._s(t.quiz.maxRetake - t.result.quizTakedCount) + " Kali")])])])])]), t._v(" "), n("div", {
                staticClass: "column"
            }, [n("div", {
                staticClass: "field"
            }, [n("label", {
                staticClass: "has-text-grey",
                attrs: {
                    for: ""
                }
            }, [t._v("Durasi Pengerjaan")]), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("p", [n("strong", [t._v(t._s(t.secondsToHms(t.result.duration)))])])])])])]) : t._e(), t._v(" "), "O" == t.member_role || "A" == t.member_role ? n("div", {
                staticClass: "columns"
            }, [n("div", {
                staticClass: "column"
            }, [n("div", {
                staticClass: "field"
            }, [n("label", {
                staticClass: "has-text-grey",
                attrs: {
                    for: ""
                }
            }, [t._v("Peluang Curang")]), t._v(" "), n("div", {
                staticClass: "control"
            }, [n("p", [n("strong", {
                staticClass: "has-text-danger"
            }, [t._v(t._s(t.result.cheatOpportunity) + " Kali")])])])])])]) : t._e()])]), t._v(" "), 1 == t.tab && 2 == t.quiz.status && t.show_evaluation ? n("div", {
                staticClass: "table-container"
            }, [n("table", {
                staticClass: "table is-bordered is-fullwidth"
            }, [t._m(0), t._v(" "), n("tbody", t._l(t.quiz.questions, (function(q, e) {
                return n("tr", {
                    key: e
                }, [n("td", {
                    attrs: {
                        width: "5%"
                    }
                }, [t._v("#" + t._s(parseInt(e) + 1))]), t._v(" "), n("td", [t._v(t._s(q.body))]), t._v(" "), n("td", t._l(q.answers, (function(e, r) {
                    return n("div", {
                        key: r,
                        staticStyle: {
                            "margin-bottom": "5px"
                        }
                    }, [n("button", {
                        staticClass: "button is-small",
                        class: {
                            "is-info": "" !== q.answer_value && q.answer_value != q.correctAnswer && q.correctAnswer == e.value,
                            "is-danger": "" !== q.answer_value && q.answer_value != q.correctAnswer && q.answer_value == e.value,
                            "is-success": "" !== q.answer_value && q.answer_value == q.correctAnswer && q.correctAnswer == e.value
                        }
                    }, [t._v("\n                " + t._s(t.keyAlphabet(t.isEmpty(e.value) ? 0 : e.value)) + "\n              ")]), t._v(" "), n("button", {
                        staticClass: "button is-text is-small"
                    }, [t._v(t._s(e.body))])])
                }
                )), 0), t._v(" "), n("td", [t._v(t._s("" !== q.answer_value && q.answer_value == q.correctAnswer ? q.score : 0))])])
            }
            )), 0)])]) : t._e()])
        }
        ), [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("thead", [n("tr", [n("th", [t._v("No.")]), t._v(" "), n("th", [t._v("Pertanyaan")]), t._v(" "), n("th", [t._v("Jawaban")]), t._v(" "), n("th", [t._v("Nilai")])])])
        }
        ], !1, null, null, null);
        e.a = component.exports
    },
    856: function(t, e, n) {
        "use strict";
        var r = {
            props: {
                arrow: {
                    type: String,
                    default: "left"
                }
            }
        }
          , l = (n(813),
        n(4))
          , component = Object(l.a)(r, (function() {
            var t = this
              , e = t.$createElement;
            return (t._self._c || e)("i", {
                class: "fas fa-arrow-" + t.arrow + " animation-bounce"
            })
        }
        ), [], !1, null, "615a6ae8", null);
        e.a = component.exports
    },
    925: function(t, e, n) {},
    927: function(t, e, n) {},
    928: function(t, e, n) {}
}]);
//# sourceMappingURL=a44b9ce.js.map
